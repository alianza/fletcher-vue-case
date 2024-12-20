<script setup lang="ts">
import { ChevronUpDownIcon, UserIcon, PhoneIcon } from "@heroicons/vue/24/solid";

const { setLocale, availableLocales, locale, t } = useI18n();

const user = useCookie("user");
const apiToken = useCookie("apiToken");

const activeLink = ref("fletcher");
const links = ["fletcher", "marriages", "wellness", "business", "events", "fanShop", "football"];
</script>

<template>
  <header>
    <div class="bg-gray-200">
      <div class="container mx-auto flex overflow-x-auto px-4">
        <a
          href="#"
          v-for="link in links"
          :class="`border-white px-4 py-2 first:border-l-[1px] last:border-r-[1px] even:border-x-[1px] ${
            activeLink === link ? 'text-primary bg-white' : 'text-primary/50'
          }`"
        >
          <span class="text-sm font-medium">{{ $t(`appHeader.navigation.${link}`) }}</span>
        </a>
      </div>
    </div>
    <div class="container mx-auto flex justify-between gap-4 p-6">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/logo-fletcher.svg" alt="Fletcher logo" class="max-sm:hidden" />
        <img src="~/assets/logo-small-fletcher.svg" alt="Fletcher logo" class="w-12 sm:hidden" />
      </NuxtLink>

      <div class="relative flex shrink-0 gap-4 place-self-start">
        <a href="tel:+31234567890" class="flex items-center gap-2 max-sm:hidden">
          <PhoneIcon class="text-secondary size-6" /> <span class="font-medium text-blue-700">+31 234 567 890</span>
        </a>

        <div class="bg-tertiary my-2 w-px self-stretch max-sm:hidden" />

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
    </div>
  </header>
</template>
