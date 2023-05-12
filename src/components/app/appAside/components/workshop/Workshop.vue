<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import TypeButton from "@/components/typeButton/TypeButton.vue";
</script>

<template>
  <section class="workshop">
    <div class="workshop-package">
      <header class="workshop-package_title">
        基础包
      </header>
      <p class="workshop-package_description">
        此包为游戏基础包，包含了游戏本体的基本内容及所有相关系统。默认加载，无法卸除。
      </p>
      <type-button class="workshop-package_button">
        <icon name="coin" style="margin-right: var(--mini);" />
        了解更多
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
@import url("./styles/workshop-factory.css");
@import url("./styles/workshop-package.css");

@layer page {
  .workshop {
    position: relative;
    z-index: 2;

    box-sizing: border-box;
    height: var(--workshop-height);
    margin: var(--base-margin);
  }
}
</style>
