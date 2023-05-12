import { computed } from "vue";
import { useCurrentSettingConfig } from "./setting";

function filterData(data: BaseSetting): AnchorArray {
  const result: AnchorArray = [];
  const topItems = data.filter(item => item.children);
  const singleItems = data.filter(item => !item.children);

  topItems.forEach((topItem) => {
    const topTitle = topItem.translator[1];
    const midItems = topItem.children!.map(child => child.translator[1]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    result.unshift([topTitle, midItems]);
  });

  singleItems.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    result.unshift([item.translator[1]]);
  });

  return result;
}

export function parseBaseSettingToAnchor() {
  const config = useCurrentSettingConfig()!;

  const anchorConfig = computed(filterData.bind(null, config.value));

  return { anchorConfig };
}
