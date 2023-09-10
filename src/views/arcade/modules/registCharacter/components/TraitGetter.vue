<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { NFormItem } from "naive-ui";
import { defer, forEach } from "lodash";
import { Trait } from "#/server/modules/traits/enums/trait.enum";
import { getRegistCharacterTraits } from "@/api/services/traits";
import type { ResponseType_PostRegist } from "@/api/services/character";
import TypeButton from "@/components/typeButton/TypeButton.vue";
import { i18nLangModel } from "#/composables/i18n/index";
import { useResourseService } from "@/services/databases/resourse/resourse.service";
import { transformArrayBufferToString } from "@/composables/trpc/oss";
import TraitTag from "@/components/trait/TraitTag.vue";

const { t } = useI18n();
const traitRef = defineModel<ResponseType_PostRegist["traits"]>();
const { storeResourse } = useResourseService();

async function getTraits() {
  const { data: { resourse: newTraits } } = await getRegistCharacterTraits().send();
  traitRef.value = newTraits.map(([content]) => transformArrayBufferToString(content.data)) as ResponseType_PostRegist["traits"];
  defer(() => forEach(newTraits, storeResourse));
}
</script>

<template>
  <n-form-item :label="t(i18nLangModel.arcade.regist_character.traits)" path="race">
    <div class="trait-tags">
      <trait-tag v-for="tag of traitRef" :key="tag" :tag-name="tag as Trait" />
    </div>
    <type-button plain @click="getTraits">
      获取
    </type-button>
  </n-form-item>
</template>

<style scoped>
@layer component {
  .trait-tags {
    display: flex;
  }

  .trait-tags:deep(.trait-tag)  {
    margin-right: var(--base-margin);
  }
}
</style>
