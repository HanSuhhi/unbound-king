import { ResponseInterceptorKeys } from "#/composables/constant/interceptor";

export function createAlert(alert: string) {
  return {
    [ResponseInterceptorKeys.RESPONESE_ALERT]: alert
  };
}
