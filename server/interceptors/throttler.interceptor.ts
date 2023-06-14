import type { Observable } from "rxjs";
import { delay } from "lodash";
import type { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { BadGatewayException, Injectable } from "@nestjs/common";
import { useMinute } from "../../composables/time/ms";
import { useSecond } from "#/composables/time/ms";

type IpRequestCount = [requestTimes: number, timer: number];

@Injectable()
export class ThrottlerInterceptor implements NestInterceptor {
  private readonly OUT_TIME = useSecond(15);
  private readonly UNLOCK_COUNTDOWN = useMinute(10);
  private readonly MAX_REQUEST_TIMES = 5;
  private throttledIp = new Set<string>();
  private ipRequestCount = new Map<string, IpRequestCount>();

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const { ip } = context.switchToHttp().getRequest();

    if (this.throttledIp.has(ip)) throw new BadGatewayException("Rate limit exceeded", "Too many requests.");
    if (!this.ipRequestCount.has(ip)) {
      this.ipRequestCount.set(ip, [1, delay(() => this.ipRequestCount.delete(ip), this.OUT_TIME)]);
      return next.handle();
    }
    const [requestTimes, timer] = this.ipRequestCount.get(ip);

    if (requestTimes + 1 === this.MAX_REQUEST_TIMES) {
      this.throttledIp.add(ip);
      delay(() => this.throttledIp.delete(ip), this.UNLOCK_COUNTDOWN);
      throw new BadGatewayException("Rate limit exceeded");
    }
    clearTimeout(timer);
    this.ipRequestCount.set(ip, [requestTimes + 1, delay(() => this.ipRequestCount.delete(ip), this.OUT_TIME)]);

    return next.handle();
  }
}
