import { describe, expect, it } from "vitest";
import { formatCodeString } from "../codeString";

describe("formatCodeString", () => {
  it("should format a single line of code", () => {
    const code = "const x=1;const y=2;";
    const formattedCode = formatCodeString(code);
    expect(formattedCode).toBe("const x = 1;\nconst y = 2;\n");
  });

  it("should format multiple lines of code", () => {
    const code = `const x = 1;
    const y = 2;
    console.log(x, y);`;
    const formattedCode = formatCodeString(code);
    expect(formattedCode).toBe("const x = 1;\nconst y = 2;\nconsole.log(x, y);\n");
  });

  it("should handle empty strings", () => {
    const code = "";
    const formattedCode = formatCodeString(code);
    expect(formattedCode).toBe("");
  });
});
