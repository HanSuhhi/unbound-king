import { resolve } from "node:path";
import fetch from "node-fetch";
import { HttpStatus } from "@nestjs/common";
import { capitalize } from "../composables/js/string";
import { Prefix } from "../composables/constant/url";
import { defineBody, defineParams, defineServiceFiles, filterQueryPath, parseSchemaRef, writeServices } from "./composables/api";
import { clearFolder } from "./composables/fs";

export async function createClientApiTemplate() {
  const { paths, components } = await (await fetch("http://localhost:13429/api-doc-json")).json() as any;
  const files: Dictionary<string[]> = {};

  for (let path in paths) {
    if (!path.includes(`/${Prefix.Server}`)) continue;

    const pathItem = paths[path];
    let result = "";

    path = filterQueryPath(path);
    for (const method in pathItem) {
      const { operationId, responses, parameters, requestBody, tags } = pathItem[method];
      const returnType
        = parseSchemaRef(
          responses[HttpStatus.OK]?.content["application/json"].schema.type || responses[HttpStatus.CREATED]?.content["application/json"].schema.$ref,
          components
        );
      const requestType = defineBody(requestBody, components);
      result += `${returnType}\n`;
      result += `${requestType}\n`;
      const params = defineParams(parameters);

      result += `
export function ${method}${capitalize(operationId.split("Controller_")[1])}(${requestType && "request: RequestBody,"}${params}config: Config<ResponseOriginData<ResponseType>> = {${params && " params "}}) {
  ${params ? "config.params = params;" : ""}
  return alovaInst.${capitalize(method.toLowerCase())}<ResponseOriginData<ResponseType>>("${path}",${method === "post" ? "request," : ""} config);
}
`;
      defineServiceFiles(files, tags, result);
    }
  }

  writeServices(files);
}

clearFolder(resolve("src", "api", "services"));
createClientApiTemplate();
