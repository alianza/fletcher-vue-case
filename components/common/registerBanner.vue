<script setup lang="ts">
import { UserPlusIcon } from "@heroicons/vue/24/solid/index.js";

import { PercentBadgeIcon, BookOpenIcon, PencilSquareIcon, GiftIcon } from "@heroicons/vue/24/outline/index.js";

import Button from "~/components/common/button.vue";

useI18n();
</script>

<template>
  <div
    class="relative flex-1 bg-[url('~/assets/banners/register-image.jpg')] bg-cover bg-right filter max-md:rounded-t-md md:rounded-r-md"
  >
    <div class="bg-primary/50 absolute z-10 h-full w-full max-md:rounded-t-md md:rounded-r-md" />

    <div class="flex h-full flex-col gap-2 p-6 *:relative *:z-20">
      <div class="flex-2 py-8">
        <img src="../../assets/my-fletcher.svg" :alt="$t('login.banner.myFletcher')" class="mx-auto" />
      </div>

      <div class="flex-2 flex flex-col gap-2 py-6">
        <h2 class="font-bold text-white">{{ $t("login.banner.title") }}</h2>

        <div class="flex gap-2">
          <PercentBadgeIcon class="size-6 text-white" />
          <p class="text-white">{{ $t("login.banner.messageDiscount") }}</p>
        </div>
        <div class="flex gap-2">
          <BookOpenIcon class="size-6 text-white" />
          <p class="text-white">{{ $t("login.banner.messageBook") }}</p>
        </div>

        <div class="flex gap-2">
          <PencilSquareIcon class="size-6 text-white" />
          <p class="text-white">{{ $t("login.banner.messageManage") }}</p>
        </div>

        <div class="flex gap-2">
          <GiftIcon class="size-6 text-white" />
          <p class="text-white">{{ $t("login.banner.messageMore") }}</p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4">
        <Button
          :label="$t('login.banner.createAccount')"
          variant="white"
          :icon="UserPlusIcon"
          @click="() => $router.push('/register')"
          icon-position="left"
          classes="px-12"
        >
        </Button>
        <p class="text-sm italic text-white">
          {{ $t("login.banner.postMessage") }}
        </p>
      </div>
    </div>
  </div>
</template>
