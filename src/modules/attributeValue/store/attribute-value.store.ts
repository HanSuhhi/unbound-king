import { formatCodeString } from "@/composables/formatCodeString";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { DATA_AttributeValue } from "../data/attrbuteValue.data";
import code from "../data/attrbuteValue.data?raw";

const useAttributeValueStore = defineStore("attribute-value", () => {
  const attributeValues = ref<AttributeValue[]>(DATA_AttributeValue);
  const isChanged = ref(false);

  const codeCanvasCode = ref(code);
  watch(
    () => attributeValues.value.length,
    () => {
      isChanged.value = true;
      const data = code.split("\n")[0] + JSON.stringify(attributeValues.value).substring(1);
      const formatData = formatCodeString(data);
      codeCanvasCode.value = formatData;
    },
  );

  return { attributeValues, codeCanvasCode, isChanged  };
});

export { useAttributeValueStore };
