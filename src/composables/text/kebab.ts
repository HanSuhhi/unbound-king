export const transformToKebab = (text: string) => {
  return text.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
