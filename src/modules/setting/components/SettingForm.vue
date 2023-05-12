<script setup lang='ts'>
import { useCurrentSettingConfig } from "../composables/setting";
import SettingRule from "./SettingRule.vue";

const setting = useCurrentSettingConfig()!;
</script>

<template>
  <article class="setting-form">
    <section v-for="{ translator, rules, children } of setting" :key="translator[0]" class="setting-form_main">
      <h4 class="main-title h-reset">
        {{ translator[1] }}
      </h4>
      <setting-rule v-for="rule of rules" :key="rule.translator[0]" />
      <template v-if="children">
        <section v-for="{ translator, rules } of children" :key="translator[0]" class="setting-form_sub">
          <h5 class="sub-title h-reset">
            {{ translator[1] }}
          </h5>
          <setting-rule v-for="rule of rules" :key="rule.translator[0]" />
        </section>
      </template>
    </section>
  </article>
</template>

<style scoped>
@layer component {
  .main-title {
    font-size: var(--font-title-main);
  }

  .sub-title {
    font-size: var(--font-title);
  }
}
</style>
