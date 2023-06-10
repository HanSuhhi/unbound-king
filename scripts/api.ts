import { writeFile } from "node:fs";
import { resolve } from "node:path";
import fetch from "node-fetch";
import { isEmpty } from "lodash";
import { capitalize } from "../composables/js/string";
import { Prefix } from "../composables/constant/url";

function filterQueryPath(url: string): string {
  const queryIndex = url.indexOf("?");
  if (queryIndex === -1) return url;

  return url.slice(0, queryIndex);
}

export async function createClientApiTemplate() {
  const { paths } = await (await fetch("http://localhost:13429/api-doc-json")).json() as any;
  let result = `import type { AlovaMethodCreateConfig } from "alova";
import { useRequest } from "alova";
import type { FetchRequestInit } from "alova/GlobalFetch";
import { alovaInst } from "../alova";

`;

  for (let path in paths) {
    // exclude ssr pages
    if (!path.includes(`/${Prefix.Server}`)) continue;

    const pathItem = paths[path];
    path = filterQueryPath(path);
    for (const method in pathItem) {
      const { operationId, summary, responses, requestBody, parameters } = pathItem[method];
      const returnType = responses.default?.content["application/json"].schema.type;

      result += `export function ${method}${capitalize(operationId.split("Controller_")[1])}(`;

      if (requestBody) {
        const properties = requestBody.content["application/json"].schema.properties;
        for (const param in properties) {
          const prop = properties[param];
          result += `${param}: ${prop.type}, `;
        }
      }

      let params = "";
      if (!isEmpty(parameters)) {
        params += "{";
        const length = Object.keys(parameters).length;
        for (const param in parameters) {
          const { name, schema, required } = parameters[param];
          params += `\n  ${name}${required ? "" : "?"}: ${schema.type}${Number(param) + 1 === length ? "" : ","}`;
        }
        params += "\n}";
      }

      result += `${params ? `params: ${params}, ` : ""}config: AlovaMethodCreateConfig<${returnType}, unknown, FetchRequestInit, Headers> = {}) {${params ? "\n  config.params = params;" : ""}
  return useRequest(alovaInst.${capitalize(method.toLowerCase())}<${returnType}>("${path}", config));
}\n`;
    }
  }

  const filePath = resolve("src", "api", "services", "test.ts");
  writeFile(filePath, result, (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
}

createClientApiTemplate();
