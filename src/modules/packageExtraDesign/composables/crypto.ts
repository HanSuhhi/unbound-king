import CryptoJS from "crypto-js";
import standardPackage from "../data/standard.data";

const keyHex = CryptoJS.enc.Utf8.parse(import.meta.env.ENCRYPTED_KEY);
const ivHex = CryptoJS.enc.Utf8.parse(import.meta.env.IV);

const cfg = {
  iv: ivHex,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
};

export const encryp = (data: Object) => {
  const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(data)), keyHex, cfg);
  return encrypted.ciphertext.toString();
};

export const decrypt = (ciphertext: string) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(ciphertext);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, keyHex, cfg);
  return decrypt.toString(CryptoJS.enc.Utf8);
};
