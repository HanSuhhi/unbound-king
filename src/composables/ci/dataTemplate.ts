export const defineDataTemplate = (data: any) => {
  if (typeof data === 'object') data = JSON.stringify(data);
  return `const data = ${data};\n\nexport default data;`;
};
