export function defineTranslatorValidator() {
  return (_: any, value: Translator, callback: (err?: Error) => void) => {
    if (!value[0]) return callback(new Error("key 值必须填写"));
    callback();
  };
}
