import { forEach, isEmpty, throttle } from "lodash-es";
import { compressToBase64 } from "lz-string";
import type { Ref } from "vue";
import { inject } from "vue";
import { useMessage } from "naive-ui";
import { choosedPackageSymbol } from "../data-package.symbol";
import { encryp } from "./crypto";
import { cryptoData } from "./cryptoData";
import { TRANSITION_DURATION } from "@/composables/constant/env";
import { getCommonDialog } from "@/composables/components/commonDialog";

export function useBuild() {
  const choosedPackages = inject<Ref<Dictionary<From[]>>>(choosedPackageSymbol)!;
  const { modal } = getCommonDialog();
  const message = useMessage();

  const buildDataPackage = throttle(() => {
    if (isEmpty(choosedPackages?.value)) return message.warning("请选择至少一个数据集！");
    const DATA: Dictionary<any> = {};
    forEach(choosedPackages.value, (packageNames, datasetName) => {
      DATA[datasetName] = [...cryptoData[datasetName].data.values()].filter(({ from }) => {
        if (packageNames.includes(from)) return true;
        return false;
      });
    });
    modal.value = true;

    const data = encryp(DATA);

    return compressToBase64(data);
  }, TRANSITION_DURATION);

  return { buildDataPackage };
}
