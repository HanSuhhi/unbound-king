<script setup lang="ts">
import { NTooltip } from "naive-ui";
import { IDATA, getDataByKey } from "../../../composables/data";
import Alert from "@/components/Alert.vue";
import AutoForm from "@/components/autoForm/autoForm.vue";
import Icon from "@/components/Icon.vue";

defineProps<{ formConfig: CreatorPlugin["data"] }>();
</script>

<template>
  <article class="forms-config">
    <alert class="forms-config_alert">
      此处表单，仅在随机生成角色时提供数据。
    </alert>
    <template v-if="formConfig.length">
      <section v-for="config of formConfig" :key="config.translator[0]" class="forms-config_form">
        <div class="forms-config_header">
          <p class="p-reset forms-config_title">
            {{ config.translator[1] }}
          </p>
          <n-tooltip v-if="!(config.description === '')" trigger="hover">
            <template #trigger>
              <icon class="forms-config_icon" cursor-pointer name="question" />
            </template>
            <span class="forms-config_description">{{ config.description || getDataByKey<any>(config.translator[0] as keyof IDATA).description
            }}</span>
          </n-tooltip>
        </div>
        <auto-form class="forms-config_formbox mb-bm" :config="config.generatorForm" :params="config.generatorParams" />
      </section>
    </template>
  </article>
</template>

<style scoped>
@layer component {
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
    font-size: var(--font-title-small);
    color: var(--gray);
  }

  .forms-config_formbox > :deep(.n-form-item:last-child) {
    display: none;
  }
}
</style>
