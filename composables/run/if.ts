export function ifIsTrue(bool: boolean) {
  return async (fn: Function) => bool && await fn();
}

export function ifIsFalse(bool: boolean) {
  return async (fn: Function) => !bool && await fn();
}

export function useIf(bool: any) {
  const _bool = !!bool;
  return [ifIsTrue(_bool), ifIsFalse(_bool)];
}
