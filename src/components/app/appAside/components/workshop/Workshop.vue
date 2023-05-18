<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Icon from "@/components/Icon.vue";
import TypeButton from "@/components/typeButton/TypeButton.vue";

const { t } = useI18n();
</script>

<template>
  <section class="workshop">
    <div class="workshop-package">
      <header class="workshop-package_title">
        {{ t("workshop.standard.title") }}
      </header>
      <p class="workshop-package_description">
        {{ t("workshop.standard.description") }}
      </p>
      <type-button class="workshop-package_button">
        <icon name="coin" style="margin-right: var(--mini);" />
        {{ t("workshop.standard.more") }}
      </type-button>
    </div>
    <div class="workshop-factory">
      <type-button plain>
        插件市集
        <icon name="bird" style="margin-left: var(--small);" />
      </type-button>
      <div class="workshop-factory-operator">
        <type-button plain class="workshop-factory-operator_item workshop-factory_last">
          <icon name="single-left" />
        </type-button>
        <type-button plain class="workshop-factory-operator_item workshop-factory_next">
          <icon name="single-right" />
        </type-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("./styles/workshop-factory.css") layer(component);
@import url("./styles/workshop-package.css") layer(component);

@layer page {
  .workshop {
    position: relative;
    z-index: 2;
    margin: var(--base-margin);
  }
}
</style>
