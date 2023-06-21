import type { CallHandler, ExecutionContext } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { of } from "rxjs";
import { ResponseDataInterceptor } from "./response-data.interceptor";
import { ResponseInterceptorKeys } from "#/composables/constant/interceptor";

describe("ResponseDataInterceptor", () => {
  let interceptor: ResponseDataInterceptor;
  const context = {
    switchToHttp() {
      return {
        getResponse() {
          return {
            statusCode: HttpStatus.OK
          };
        }
      };
    }
  } as ExecutionContext;
  beforeEach(async () => {
    interceptor = new ResponseDataInterceptor();
  });

  it("should intercept and encapsulate the return value", () => {
    const next = {
      handle: () => of({ key: "value" })
    } as CallHandler<any>;

    const expectedResponse = {
      data: { key: "value" },
      statusCode: HttpStatus.OK
    };

    const result = interceptor.intercept(context, next);

    result.subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  });

  it("should intercept and add an alert value to the response if it exists", () => {
    const next = {
      handle: () => of({ [ResponseInterceptorKeys.RESPONESE_ALERT]: "Some alert message", key: "value" })
    } as CallHandler<any>;

    const expectedResponse = {
      data: { key: "value" },
      [ResponseInterceptorKeys.RESPONESE_ALERT]: "Some alert message",
      statusCode: HttpStatus.OK
    };

    const result = interceptor.intercept(context, next);

    result.subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
  });

  it("should intercept and add status code to the response", () => {
    const context = {
      switchToHttp() {
        return {
          getResponse() {
            return {
              statusCode: HttpStatus.OK
            };
          }
        };
      }
    } as ExecutionContext;
    const next = {
      handle: () => of({ key: "value" })
    };
    const result = interceptor.intercept(context, next);
    result.subscribe((response) => {
      expect(response.statusCode).toEqual(HttpStatus.OK);
    });
  });
});
