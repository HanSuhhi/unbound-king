<script setup lang="ts">
import { DATA_GameIcons } from "@/modules/gameIcon/data";
import { ElSelect } from "element-plus";
import { transformIconToElLabelOptions } from '../composable/elLabelOptions';

const options = transformIconToElLabelOptions(DATA_GameIcons);
</script>

<template>
  <el-select placeholder="请选择一个图标" filterable>
    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
      <el-option v-for="(icon, id) in group.options" :key="id" :label="icon.translator[1]" :value="id">
        <p class="p-reset form-icon_option">
          <Icon :icon="icon" />
          {{ icon.translator[1] }} / {{ icon.translator[0] }}
        </p>
      </el-option>
    </el-option-group>
  </el-select>
</template>

<style scoped>
.form-icon_option {
  display: flex;
  align-items: center;
}

.form-icon_option>.icon {
  margin-right: var(--base-margin);
}
</style>
