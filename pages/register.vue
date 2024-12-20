<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import Button from "~/components/common/button.vue";
</script>

<template>
  <div class="flex w-full p-4">
    <section
      class="m-auto flex max-w-[900px] grow flex-col-reverse rounded-md bg-white shadow md:flex-row"
    >
      <div class="flex-3 flex grow flex-col gap-6 p-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-primary text-xl font-bold">
            {{ $t("register.title") }}
          </h1>
          <p>{{ $t("register.subtitle") }}</p>
        </div>

        Not finished...

        <Button
          :label="$t('general.register')"
          variant="secondary"
          :icon="ArrowRightIcon"
          classes="w-full"
        />

        <NuxtLink to="/login" class="text-primary underline">
          {{ $t("register.login") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
