<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import TypeButton from "@/components/typeButton/TypeButton.vue";
import "./styles/workshop-factory.css";
import "./styles/workshop-package.css";
</script>

<template>
  <section class="workshop">
    <p class="workshop_title">工坊</p>
    <div class="workshop-package">
      <header class="workshop-package_title">基础包</header>
      <p class="workshop-package_description">此包为游戏基础包，包含了游戏本体的基本内容及所有相关系统。默认加载，无法卸除。</p>
      <TypeButton class="workshop-package_button">
        <Icon icon="coin" style="margin-right: var(--mini);" />
        了解更多
      </TypeButton>
    </div>
    <div class="workshop-factory">
      <div class="workshop-factory_more">
        插件市集
        <Icon icon="bird" style="margin-left: var(--small);" />
      </div>
      <div class="workshop-factory-operator">
        <div class="workshop-factory-operator_item workshop-factory_last">
          <Icon icon="single-left" />
        </div>
        <div class="workshop-factory-operator_item workshop-factory_next">
          <Icon icon="single-right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workshop {
  position: absolute;
  bottom: 0;
  left: calc(var(--modules-width) + 1 * var(--base-margin));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc(100% - var(--modules-width) - 2 * var(--base-margin));
  height: calc(100% - var(--max-height));
  overflow: hidden;
}

.workshop_title {
  margin-block-start: 0;
  margin-block-end: 0.5rem;
  color: var(--gray-deep-2);
  font-weight: bolder;
  font-size: var(--font-title);
}
</style>
