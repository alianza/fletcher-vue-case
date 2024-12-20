<script setup lang="ts">
import type { ButtonHTMLAttributes, Component } from "vue";
import Loader from "~/components/common/loader.vue";

const commonClasses =
  "group flex items-center gap-2 justify-center hover:shadow-lg p-4 transition-[transform,box-shadow] active:duration-100 active:scale-95 disabled:hover:shadow-none";

const variants = {
  primary: "text-white rounded-md bg-primary " + commonClasses,
  secondary: "text-white rounded-md bg-secondary " + commonClasses,
  tertiary: "text-primary rounded-md bg-tertiary " + commonClasses,
  white: "text-primary rounded-full bg-white " + commonClasses,
};

const {
  type = "button",
  label = "",
  icon = null,
  variant = "primary",
  iconPosition = "right",
  classes = "",
  loading = false,
} = defineProps<{
  type?: ButtonHTMLAttributes["type"];
  label?: string;
  icon?: Component;
  variant?: keyof typeof variants;
  iconPosition?: "left" | "right";
  classes?: string;
  loading?: boolean;
}>();
</script>

<template>
  <button :type="type" :class="(variants[variant] ?? variants.primary) + ' ' + classes">
    <component
      :is="icon"
      v-if="icon && iconPosition === 'left' && !loading"
      :class="`size-6 transition-transform group-hover:-translate-x-2 ${$attrs.disabled ? 'group-hover:!-translate-x-0' : ''}`"
    />

    <span class="font-bold">{{ label }}</span>

    <component
      :is="icon"
      v-if="icon && iconPosition === 'right' && !loading"
      :class="`size-6 transition-transform group-hover:translate-x-2 ${$attrs.disabled ? 'group-hover:!translate-x-0' : ''}`"
    />
    <Loader v-if="loading" />
  </button>
</template>
