<script setup lang="ts">
import { ChevronUpDownIcon, UserIcon } from "@heroicons/vue/24/solid";

const { setLocale, availableLocales, locale } = useI18n();

const user = useCookie("user");
const apiToken = useCookie("apiToken");
</script>

<template>
  <header class="flex justify-between gap-4 p-6">
    <NuxtLink to="/" class="flex items-center">
      <img src="~/assets/logo-fletcher-white.svg" alt="Fletcher logo" class="max-sm:hidden" />
      <img src="~/assets/logo-small-fletcher-white.svg" alt="Fletcher logo" class="w-12 sm:hidden" />
    </NuxtLink>

    <div class="relative flex shrink-0 gap-4 place-self-start">
      <button
        v-if="user"
        @click="
          user = '';
          apiToken = '';
          navigateTo('/login');
        "
        class="text-primary border-tertiary rounded-md border-[1px] bg-white px-4 py-2 transition-[transform,box-shadow] hover:scale-105 hover:underline hover:shadow active:scale-95"
        :title="$t('general.logout')"
      >
        <UserIcon class="size-6" />
      </button>

      <button
        class="border-tertiary flex items-center gap-1 rounded-md border-[1px] bg-white p-2 transition-[transform,box-shadow] hover:scale-105 hover:shadow active:scale-95"
        v-on:click="setLocale(availableLocales[(availableLocales.indexOf(locale) + 1) % availableLocales.length])"
      >
        <img :src="`/flags/${locale}.png`" :alt="locale" width="32px" class="rounded-md" />
        <ChevronUpDownIcon class="size-6" />
      </button>
    </div>
  </header>
</template>
