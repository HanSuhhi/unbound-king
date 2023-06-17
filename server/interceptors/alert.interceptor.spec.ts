import type { CallHandler, ExecutionContext } from "@nestjs/common";
import { of } from "rxjs";
import { AlertInterceptor } from "./alert.interceptor";
import { ResponseInterceptorKeys } from "#/composables/constant/interceptor";

describe("AlertInterceptor", () => {
  let interceptor: AlertInterceptor;

  beforeEach(async () => {
    interceptor = new AlertInterceptor();
  });

  it("should intercept and add an alert value to the response if it exists", () => {
    const context = {} as ExecutionContext;
    const next = {
      handle: () => of({ [ResponseInterceptorKeys.RESPONESE_ALERT]: "Some alert message", key: "value" })
    } as CallHandler<any>;

    const expectedResponse = {
      data: { key: "value" },
      [ResponseInterceptorKeys.RESPONESE_ALERT]: "Some alert message"
    };

    const result = interceptor.intercept(context, next);

    result.subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  });

  it("should intercept and do nothing if there is no alert value in the response", () => {
    const context = {} as ExecutionContext;
    const next = {
      handle: () => of({ key: "value" })
    } as CallHandler<any>;

    const expectedResponse = { data: { key: "value" } };

    const result = interceptor.intercept(context, next);

    result.subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  });
});
