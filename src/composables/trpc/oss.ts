export function transformArrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let len = bytes.byteLength, i = 0; i < len; i++)
    binary += String.fromCharCode(bytes[i]);

  return window.btoa(binary);
}
