import { ref, computed } from "vue";

const defineCharacterModel = () => {
  const attributeValues = {
    wuli: {
      base: ref(20),
    },
  };

  const attributes = {
    atk: {
      base: ref(20),
      extra: [computed(() => attributeValues.wuli.base.value * 1.6)],
      total: computed(() => attributes.atk.base.value + attributes.atk.extra[0].value),
    },
  };

  return { attributes };
};

const a = defineCharacterModel();
console.log("a: ", a.attributes.atk.total);
