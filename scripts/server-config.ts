import { resolve } from "node:path";
import xlsx from "node-xlsx";
import { capitalize } from "../composables/js/string";
import { writeFileToProject } from "./composables/fs";

function generateEnumConfig() {
  const excelPath = resolve(__dirname, "configs", "enum.xlsx");
  const workbooks = xlsx.parse(excelPath, {
    type: "binary"
  });
  workbooks.forEach(({ name: moduleName, data }) => {
    const resultData: any = {};
    let title = "";
    data.forEach(([key, value], index) => {
      if (index === 0) return title = value;
      if (index === 1 || index === 2 || index === 3) return;
      resultData[capitalize(key)] = value;
    });
    const filePath = resolve(__dirname, "..", "server", "modules", moduleName, "enums", `${title.toLowerCase()}.enum.ts`);
    const enumValue = JSON.stringify(resultData).replaceAll("\":\"", "\"=\"").replaceAll("\",", "\",\n");
    const enumString = `export enum ${title} \n ${enumValue}`;

    writeFileToProject(filePath)(enumString);
  });
}

generateEnumConfig();
