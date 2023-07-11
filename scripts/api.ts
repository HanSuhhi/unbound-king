import { resolve } from "node:path";
import fetch from "node-fetch";
import { HttpStatus } from "@nestjs/common";
import { capitalize } from "../composables/js/string";
import { Prefix } from "../composables/constant/url";
import { defineBody, defineParams, defineServiceFiles, defineTypeName, filterQueryPath, parseSchemaRef, writeServices } from "./composables/api";
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
      const methodTitle = `${method}${capitalize(operationId.split("Controller_")[1])}`;
      const returnType = parseSchemaRef(responses[HttpStatus.OK]?.content["application/json"].schema.type || responses[HttpStatus.OK]?.content["application/json"].schema.$ref || responses[HttpStatus.CREATED]?.content["application/json"].schema.$ref, components, methodTitle);
      const requestType = defineBody(requestBody, components, methodTitle);
      const params = defineParams(parameters);
      const requestBodyType = defineTypeName("RequestBody", methodTitle);
      const responseBodyType = defineTypeName("ResponseType", methodTitle);

      result += `${returnType}\n`;
      result += `${requestType}\n`;
      result += `export function ${methodTitle}(${requestType && `request: ${requestBodyType},`}${params}config: Config<ResponseOriginData<${responseBodyType}>> = {${params && " params "}}) {
        ${params ? "config.params = params;" : ""}
        const methodInstance = alovaInst.${capitalize(method.toLowerCase())}<ResponseOriginData<${responseBodyType}>>("${path}",${["post", "patch"].includes(method) ? "request," : ""} config);
        return methodInstance;
      }`;

      defineServiceFiles(files, tags, result);
    }
  }

  writeServices(files);
}

clearFolder(resolve("src", "api", "services"));
createClientApiTemplate();
