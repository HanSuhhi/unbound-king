import type { ExecutionContext } from "@nestjs/common";
import { BadGatewayException } from "@nestjs/common";
import { useMinute, useSecond } from "../../composables/time/ms";
import { ThrottlerInterceptor } from "./throttler.interceptor";

describe("ThrottlerInterceptor", () => {
  let throttlerInterceptor: ThrottlerInterceptor;

  beforeEach(() => {
    vi.useFakeTimers();
    throttlerInterceptor = new ThrottlerInterceptor();
  });

  it("should be defined", () => {
    expect(new ThrottlerInterceptor()).toBeDefined();
  });

  it("should handle first request", () => {
    const next = { handle: vi.fn() };
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({ ip: "1.1.1.1" })
      })
    } as ExecutionContext;
    throttlerInterceptor.intercept(context, next as any);
    expect(next.handle).toHaveBeenCalled();
  });

  it("will be locked if 5 requests are made in 15 seconds.", () => {
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({ ip: "1.1.1.1" })
      })
    } as ExecutionContext;
    const next = { handle: vi.fn() };

    for (let i = 0; i < 4; i++)
      throttlerInterceptor.intercept(context, next as any);

    vi.advanceTimersByTime(useSecond(15));

    throttlerInterceptor.intercept(context, next as any);
    expect(next.handle).toHaveBeenCalled();

    for (let i = 0; i < 3; i++)
      throttlerInterceptor.intercept(context, next as any);

    expect(() => {
      throttlerInterceptor.intercept(context, next as any);
    }).toThrow(BadGatewayException);
  });

  it("should unblock ip after 10 minutes", () => {
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({ ip: "1.1.1.1" })
      })
    } as ExecutionContext;
    const next = { handle: vi.fn() };

    for (let i = 0; i < 4; i++)
      throttlerInterceptor.intercept(context, next as any);

    expect(() => {
      throttlerInterceptor.intercept(context, next as any);
    }).toThrow(BadGatewayException);

    vi.advanceTimersByTime(useMinute(10));

    throttlerInterceptor.intercept(context, next as any);
    expect(next.handle).toHaveBeenCalled();
  });
});
