export const defineUniqueId = (prefix: string = "") => {
  const randomNumber = Math.random();
  const timestamp = new Date().getTime().toString();
  const uniqueNumber = randomNumber.toString().substring(2, 5) + timestamp;
  return `${prefix.toUpperCase()}${uniqueNumber}`;
};
