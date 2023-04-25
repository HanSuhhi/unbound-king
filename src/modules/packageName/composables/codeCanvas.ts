import { computed, ref } from "vue";
import { DATA_PackageNames } from "../data/packageName.data";
import { applyDataToModule } from "@/composables/experience/codeChanged";

export function usePackageNameCodeCanvas() {
  const packageNames = ref<Dictionary<string>>(DATA_PackageNames);
  const codeTemplate = computed(() => [`export const DATA_PackageNames: Dictionary<string> = ${JSON.stringify(packageNames.value)}`]);

  const { code } = applyDataToModule(packageNames, codeTemplate);

  return { code, packageNames };
}
