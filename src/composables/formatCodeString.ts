import prettier from "prettier";
import parserTypescript from "prettier/parser-typescript";

export function formatCodeString(codeString: string): string {
  const formattedCode = prettier.format(codeString, {
    parser: "typescript",
    plugins: [parserTypescript],
    bracketSpacing: true,
    trailingComma: "all",
  });
  return formattedCode;
}
