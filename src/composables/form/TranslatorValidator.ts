export const defineTranslatorValidator = () => (_: any, value: Translator, callback: any) => {
  if (!value.key) {
    return callback(new Error("key 值必须填写"));
  }
  callback();
};
