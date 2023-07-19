import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { writeFile } from "node:fs";
import { forEach, isEmpty, lowerCase } from "lodash";
import { capitalize } from "../../composables/js/string";

export const IMPORT_PACKAGES_TEMPLATE = `import type { AlovaMethodCreateConfig } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";
import type { ResponseOriginData } from "#/composables/types/api";

type Config<T> = AlovaMethodCreateConfig<T, unknown, FetchRequestInit, Headers>;`;

/**
 * Filters the query string from a URL.
 *
 * @param {string} url The input URL
 * @returns {string} The URL without the query string
 */
export function filterQueryPath(url: string): string {
  const queryIndex = url.indexOf("?");
  if (queryIndex === -1) return url;

  return url.slice(0, queryIndex);
}

/**
 * Defines function parameters from API specs.
 *
 * @param {any} parameters The API parameters object
 * @returns {string} The function parameter definitions
 */
export function defineParams(parameters: any): string {
  let params = "";
  if (!isEmpty(parameters)) {
    params += "{";
    const length = Object.keys(parameters).length;
    for (const param in parameters) {
      const { name, schema, required } = parameters[param];
      params += `\n  "${name}"${required ? "" : "?"}: ${schema.type}${Number(param) + 1 === length ? "" : ","}`;
    }
    params += "\n}";
  }

  return params ? `params: ${params}, ` : "";
}

export function defineBody(requestBody: any, components: any, methodTitle: string) {
  if (isEmpty(requestBody)) return "";
  return parseSchemaRef(requestBody.content["application/json"].schema.$ref, components, methodTitle, "RequestBody");
}

/**
 * Adds a function definition to the correct service file based on its tags.
 *
 * @param {Dictionary<string[]>} files The dictionary of service files
 * @param {any} tags The OpenAPI operation tags
 * @param {string} result The function definition string
 */
export function defineServiceFiles(files: Dictionary<string[]>, tags: any, result: string) {
  let [filename = "default"] = tags;
  filename = lowerCase(filename);

  if (!files[filename]) files[filename] = [IMPORT_PACKAGES_TEMPLATE];
  files[filename].push(result);
}

/**
 * Writes the service files and runs ESLint fix on them.
 *
 * @param {Dictionary<string[]>} files The dictionary of service file content
 */
export function writeServices(files: Dictionary<string[]>) {
  forEach(files, (file, filename) => {
    const filePath = resolve("src", "api", "services", `${filename}.ts`);
    writeFile(filePath, file.join("\n"), (err) => {
      if (err) throw err;
    });
    spawn(process.platform.startsWith("win") ? "eslint.cmd" : "eslint", [filePath, "--fix"]).on("error", (err) => {
      throw err;
    });
  });
  console.log("Saved!");
}

function parseSchemasTypeDetail({ type, enum: typeEnum, items, oneOf }: any) {
  const parseEnum = <T>(_enum: Array<T>) => {
    return _enum.map((enumItem: T) => `"${enumItem}"`).join(" | ");
  };
  const parseType = (type: string): string => {
    console.log("🚀 ~ file: api.ts:91 ~ parseType ~ type:", type);
    switch (type) {
      case "buffer":
        return "import(\"buffer\").Buffer";
      default:
        return type;
    }
  };
  const parseTuple = (oneOf: any) => {
    console.log("🚀 ~ file: api.ts:100 ~ parseTuple ~ oneOf:", oneOf);
    let tupleType = "[";
    oneOf.forEach(({ type, items }: any) => {
      if (type === "array") tupleType += `Array<${parseType(items.type)}>,`;
      else tupleType += `${parseType(type)},`;
    });
    return `${tupleType}]`;
  };
  switch (type) {
    case "string":
      if (typeEnum) return parseEnum(typeEnum);
      return type;
    case "array":
    default:
      if (items) {
        if (items.type === "string") {
          if (items.enum) {
            const enumTypeString = parseEnum(items.enum);
            return `Array<${enumTypeString}>`;
          }
          if (oneOf) return parseTuple(oneOf);
        }
        if (items.type === "array")
          if (oneOf) return `Array<${parseTuple(oneOf)}>`;
      }
      return type;
  }
}

function generatePropertyDescription(dto: any, typename: string, methodTitle: string) {
  const descriptions = Object.entries(dto.properties).map(([key, value]: any) => {
    const _description = value.description
      ? `/**
    * ${value.description}
    */\n`
      : "";
    return `${_description}${key}${dto?.required?.includes(key) ? "" : "?"}: ${parseSchemasTypeDetail(value)};`;
  });
  const typefile = `export interface ${defineTypeName(typename, methodTitle)} {
    ${descriptions.join("\n")}
  };`;
  return typefile;
}

export function defineTypeName(typename: string, methodTitle: string) {
  return `${typename}_${capitalize(methodTitle)}`;
}

export function parseSchemaRef($ref: string, components: any, methodTitle: string, typename: "ResponseType" | "RequestBody" = "ResponseType") {
  const schemasPath = "#/components/schemas/";
  if (!$ref.startsWith(schemasPath)) return `type ${defineTypeName(typename, methodTitle)} = ${$ref};`;
  $ref = $ref.replace(schemasPath, "").replace(/\//g, ".");
  const dto = components.schemas[$ref];
  const type = generatePropertyDescription(dto, typename, methodTitle);
  return type;
}
