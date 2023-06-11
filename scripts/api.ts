import fetch from "node-fetch";
import { capitalize } from "../composables/js/string";
import { Prefix } from "../composables/constant/url";
import { defineParams, defineServiceFiles, filterQueryPath, writeServices } from "./composables/api";

export async function createClientApiTemplate() {
  const { paths } = await (await fetch("http://localhost:13429/api-doc-json")).json() as any;
  const files: Dictionary<string[]> = {};

  for (let path in paths) {
    // exclude ssr pages
    if (!path.includes(`/${Prefix.Server}`)) continue;

    const pathItem = paths[path];
    let result = "";

    path = filterQueryPath(path);
    for (const method in pathItem) {
      const { operationId, responses, parameters, tags } = pathItem[method];
      const returnType = responses.default?.content["application/json"].schema.type;
      const params = defineParams(parameters);

      result += `
export function ${method}${capitalize(operationId.split("Controller_")[1])}(${params}config: Config<${returnType}> = {${params && " params "}}) {
  ${params ? "config.params = params;" : ""}
  return alovaInst.${capitalize(method.toLowerCase())}<${returnType}>("${path}", config);
}
`;
      defineServiceFiles(files, tags, result);
    }
  }

  writeServices(files);
}

createClientApiTemplate();
