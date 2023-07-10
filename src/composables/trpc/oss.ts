import type { Buffer } from "node:buffer";

export function transformArrayBufferToBase64(buffer: Buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let len = bytes.byteLength, i = 0; i < len; i++)
    binary += String.fromCharCode(bytes[i]);

  return `data:image/jpg;base64,${window.btoa(binary)}`;
}
