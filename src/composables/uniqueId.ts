export const defineUniqueId = () => {
  const randomNumber = Math.random();
  const timestamp = new Date().getTime().toString();
  const uniqueNumber = timestamp.substring(timestamp.length - 5) + randomNumber.toString().substring(2, 14);
  return uniqueNumber;
};
