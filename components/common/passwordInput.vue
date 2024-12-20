<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";

const { label = "", id = "" } = defineProps<{
  label?: string;
  id?: string;
}>();

defineOptions({ inheritAttrs: false });

const model = defineModel();

const showPassword = ref(false);

const icon = computed(() => (showPassword.value ? EyeSlashIcon : EyeIcon));

const inputType = computed(() => (showPassword.value ? "text" : "password"));
</script>

<template>
  <div class="relative mt-2">
    <div class="relative">
      <icon
        class="text-primary absolute right-2 top-1/3 size-4 cursor-pointer"
        @click="showPassword = !showPassword"
      />
      <input
        :type="inputType"
        :id="label || id"
        class="w-full"
        v-model="model"
        v-bind="$attrs"
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
