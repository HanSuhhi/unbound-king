<script setup lang="ts">
import Alert from "@/components/alert/alert";
import AutoForm from "@/components/autoForm/autoForm.vue";
import Icon from "@/components/Icon.vue";
import { getDataById } from "@/composables/data";
import { NTooltip } from "naive-ui";
import { getDataByKey } from "../../../composables/data";

defineProps<{ formConfig: CreatorPlugin["data"] }>();
</script>

<template>
  <article class="forms-config">
    <alert class="forms-config_alert"> 此处表单，仅在随机生成人物时提供数据。 </alert>
    <template v-if="formConfig.length">
      <section v-for="config of formConfig" :key="config.id" class="forms-config_form">
        <div class="forms-config_header">
          <p class="p-reset forms-config_title">{{ config.translator.title }}</p>
          <n-tooltip v-if="!(config.description === '')" trigger="hover">
            <template #trigger>
              <icon class="forms-config_icon" :name="'question'" />
            </template>
            <span class="forms-config_description">{{ config.description || getDataByKey(config.translator.key).description }}</span>
          </n-tooltip>
        </div>
        <auto-form class="forms-config_formbox" :config="config.generatorForm" :params="config.generatorParams" />
      </section>
    </template>
  </article>
</template>
<style scoped>
.forms-config_alert {
  margin: var(--base-margin);
}

.forms-config_form {
  padding: 0 var(--base-margin);
  padding-top: var(--base-margin);
}

.forms-config_form:not(:last-child) {
  border-bottom: 4px dashed var(--border-color);
}

.forms-config_form:hover {
  background-color: var(--bg-color);
}

.forms-config_header {
  display: flex;
  align-items: center;
  margin-bottom: var(--base-margin);
}

.forms-config_title {
  margin-right: var(--small);
  font-size: var(--font-title-small);
  white-space: nowrap;
}

.forms-config_icon {
  color: var(--gray);
  font-size: var(--font-title-small);
  cursor: pointer;
}
</style>
