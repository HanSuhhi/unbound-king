type CallbackFunction = (...args: any[]) => any;

export function useFunctionListener(fn: CallbackFunction) {
  const waitCallbackList: CallbackFunction[] = [];

  const final = (fn: CallbackFunction) => {
    waitCallbackList.push(fn);
  };

  const run = async () => {
    await fn();
    waitCallbackList.forEach(async fn => await fn());
  };

  return {
    final,
    run
  };
}
