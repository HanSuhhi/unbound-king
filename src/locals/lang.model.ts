export function defineLang(message: Dictionary<any>, title: string) {
  Reflect.setPrototypeOf(message, { title });
  return message;
}
