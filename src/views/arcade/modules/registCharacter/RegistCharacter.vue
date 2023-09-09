<script setup lang='ts'>
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import RegistCharacterForm from "./components/RegistCharacterForm.vue";
import { useEditionService } from "@/services/databases/edition/edition.service";
import { ResourseTag } from "#/server/modules/editions/enums/resourse-tag.enum";
import { useResourseEdition } from "@/composables/store/resourse";

const { t } = useI18n();

const { getRegistCharacterVersion } = useEditionService();
const registCharacterVersion = await getRegistCharacterVersion();
const { storeEditionAndResources } = useResourseEdition(ResourseTag.RegistCharacter, registCharacterVersion?.edition);

onMounted(storeEditionAndResources);
</script>

<template>
  <article class="regist-character">
    <section class="regist-character_selection">
      some icons here
      <div class="regist-character_characters">
        icons description
      </div>
      <div class="regist-character_operators" />
    </section>
    <regist-character-form class="regist-character_character" />
  </article>
</template>

<style scoped>
@layer page {
  .regist-character {
    --margin-size: 8%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
    height: calc(100vh - var(--global-header-height));
    margin: 0 var(--margin-size);

  }

  .regist-character_selection {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .regist-character_characters {
    flex: 1;
  }
}
</style>
