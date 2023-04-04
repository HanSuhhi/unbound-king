import { describe, it, expect } from 'vitest';
import { defineDataTemplate } from '../dataTemplate';

describe('defineDataTemplate', () => {
  it('should return the correct template for a string input', () => {
    const data = 'hello world!';
    const expectedTemplate = 'const data = hello world!;\n\nexport default data;';
    const actualTemplate = defineDataTemplate(data);
    expect(actualTemplate).toEqual(expectedTemplate);
  });

  it('should return the correct template for a number input', () => {
    const data = 12345;
    const expectedTemplate = 'const data = 12345;\n\nexport default data;';
    const actualTemplate = defineDataTemplate(data);
    expect(actualTemplate).toEqual(expectedTemplate);
  });

  it('should return the correct template for an object input', () => {
    const data = { foo: 'bar', baz: 123 };
    const expectedTemplate = 'const data = {"foo":"bar","baz":123};\n\nexport default data;';
    const actualTemplate = defineDataTemplate(data);
    expect(actualTemplate).toEqual(expectedTemplate);
  });
});
