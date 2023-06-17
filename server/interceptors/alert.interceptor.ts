import type { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResponseInterceptorKeys } from "../../composables/constant/interceptor";

@Injectable()
export class AlertInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => {
      const returnValue = { data };

      const alertValue = data[ResponseInterceptorKeys.RESPONESE_ALERT];
      if (alertValue) {
        delete data[ResponseInterceptorKeys.RESPONESE_ALERT];
        returnValue[ResponseInterceptorKeys.RESPONESE_ALERT] = alertValue;
      }

      return returnValue;
    }));
  }
}
