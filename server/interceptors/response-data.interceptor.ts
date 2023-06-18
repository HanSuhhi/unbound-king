import type { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isString } from "lodash";
import { ResponseInterceptorKeys } from "../../composables/constant/interceptor";

@Injectable()
export class ResponseDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => {
      if (isString(data) && data.startsWith("<!DOCTYPE html>")) return data;
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
