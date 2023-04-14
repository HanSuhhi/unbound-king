export function defineDataTemplate(data: Object | string) {
  if (typeof data === "object") data = JSON.stringify(data);
  return `const data = ${data as string};\n\nexport default data;`;
}
