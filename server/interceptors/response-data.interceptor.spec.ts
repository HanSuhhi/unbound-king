import type { CallHandler, ExecutionContext } from "@nestjs/common";
import { of } from "rxjs";
import { ResponseDataInterceptor } from "./response-data.interceptor";
import { ResponseInterceptorKeys } from "#/composables/constant/interceptor";

describe("ResponseDataInterceptor", () => {
  let interceptor: ResponseDataInterceptor;

  beforeEach(async () => {
    interceptor = new ResponseDataInterceptor();
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
