import { describe, it, expect } from 'vitest';
import { parseImportModule } from '../importModule';

describe('parseImportModule', () => {
  it('should return an object with keys based on the last segment of the input path', () => {
    const testData = {
      './path/to/module1.js': { foo: 'bar', baz: 123 },
      './path/to/module2.js': { default: 'hello world!' },
      './path/to/module3.js': { foo: { bar: { baz: 'qux' } } }
    };

    const result = parseImportModule(testData);
    expect(result).toEqual({
      'module1': { foo: 'bar', baz: 123 },
      'module2': { default: 'hello world!' },
      'module3': { foo: { bar: { baz: 'qux' } } }
    });
  });

  it('should return an object with values extracted from the "default" property when "returnDefault" is set to true', () => {
    const testData = {
      './path/to/module1.js': { default: { foo: 'bar', baz: 123 } },
      './path/to/module2.js': { default: 'hello world!' },
      './path/to/module3.js': { default: { foo: { bar: { baz: 'qux' } } } }
    };
    const result = parseImportModule(testData, true);
    expect(result).toEqual({
      'module1': { foo: 'bar', baz: 123 },
      'module2': 'hello world!',
      'module3': { foo: { bar: { baz: 'qux' } } }
    });
  });
});
