<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

const {
  type = "text",
  label = "",
  icon = null,
  id = "",
} = defineProps<{
  type?: InputHTMLAttributes["type"];
  label?: string;
  icon?: Component;
  id?: string;
}>();

defineOptions({ inheritAttrs: false });

const model = defineModel();
</script>

<template>
  <div class="relative mt-2">
    <div class="relative">
      <input
        :type="type"
        :id="label || id"
        :class="`w-full ${icon ? 'pl-6' : ''}`"
        v-model="model"
        v-bind="$attrs"
      />
      <icon
        v-if="icon"
        class="text-primary pointer-events-none absolute left-2 top-1/3 size-4"
      />
    </div>
    <label
      :for="label || id"
      class="text-primary blo ck absolute -top-3 left-2 px-1 text-sm"
    >
      <div class="absolute bottom-[6px] left-0 block h-[2px] w-full bg-white" />
      <span class="relative">{{ label }}</span>
    </label>
  </div>
</template>
