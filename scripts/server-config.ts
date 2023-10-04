import { resolve } from "node:path";
import xlsx from "node-xlsx";
import { camelCase, kebabCase } from "lodash";
import { capitalize } from "../composables/js/string";
import { writeFileToProject } from "./composables/fs";

function readFilePathFromSheet({ name, data }: ReturnType<typeof xlsx["parse"]>[number]) {
  const fileModuleName = (data[0] as any)[1];
  const suffixName = name.split("__")[1];
  const prefixName = name.split("__")[0];

  const filename = suffixName ? `${kebabCase(suffixName)}.${prefixName}` : `${prefixName}`;

  const filePath = resolve(__dirname, "..", "src", "configs", fileModuleName, `${(filename)}.ts`);
  return [filePath, fileModuleName, prefixName, suffixName];
}

function parseAndStoreEnumData({ data }: ReturnType<typeof xlsx["parse"]>[number], fileModuleName: string, suffixName: string) {
  const dataArray = data as any[];

  let enumString = "";

  switch (fileModuleName) {
    case "lineages": {
      const humanLineageData = dataArray.filter(([, , type]) => type === "human");
      const yokaiLineageData = dataArray.filter(([, , type]) => type === "yokai");
      const elvesLineageData = dataArray.filter(([, , type]) => type === "elves");

      enumString = `export enum HumanLineage {
         ${humanLineageData.map(([key, value]) => `${capitalize(key)} = "${value}",`).join("")}
        }`;
      enumString += `\n\nexport enum YokaiLineage {
        ${yokaiLineageData.map(([key, value]) => `${capitalize(key)} = "${value}",`).join("")}
        }`;
      enumString += `\n\nexport enum ElvesLineage {
        ${elvesLineageData.map(([key, value]) => `${capitalize(key)} = "${value}",`).join("")}
        }`;

      break;
    }
    default: {
      const resultData = dataArray.filter(([key], index) => index > 3 && key).map(([key, value]) => `${capitalize(key)} = "${value}",`).join("\n");
      enumString = `export enum ${capitalize(suffixName)} \n { ${resultData} }`;

      break;
    }
  }

  return { enumString };
}

function generateEnumConfig() {
  const excelPath = resolve(__dirname, "configs", "config.xlsx");
  const workbooks = xlsx.parse(excelPath, { type: "binary" });
  workbooks.forEach((workbook) => {
    const type = workbook.name.split("__")[0];
    const [filePath, fileModuleName, prefixName, suffixName] = readFilePathFromSheet(workbook);

    switch (type) {
      case "enum": {
        const { enumString } = parseAndStoreEnumData(workbook, fileModuleName, suffixName);
        return writeFileToProject(filePath)(enumString);
      }
      default: {
        const enumString = `export const ${camelCase(prefixName)} = ${JSON.stringify(workbook.data.map(subData => subData.filter(subDataItem => subDataItem && subDataItem.trim())).slice(3))}`;

        return writeFileToProject(filePath)(enumString);
      }
    }
  });
}

generateEnumConfig();
