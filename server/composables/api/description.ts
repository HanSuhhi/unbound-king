import { forEach } from "lodash";

export function useApiOperationDescriptionEnum(title: string, enumObject: object) {
  let string = `${title}:`;
  let index = 1;
  forEach(enumObject, (value, key) => {
    string += `\n${index++}. ${value} means ${key}`;
  });
  return string;
}
