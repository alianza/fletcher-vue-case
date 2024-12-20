<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import Button from "~/components/common/button.vue";

const user = useCookie("user");

const isUserLoggedIn = computed(() => !!user.value);
</script>

<template>
  <div class="flex w-full p-4">
    <section class="m-auto flex max-w-[900px] grow flex-col-reverse rounded-md bg-white shadow md:flex-row">
      <div class="flex-3 flex grow flex-col gap-6 p-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-primary text-xl font-bold">
            {{ $t("homepage.title") }}
          </h1>
          <p>{{ $t("homepage.subtitle") }}</p>

          <div v-if="isUserLoggedIn" class="flex gap-1">
            <p class="text-primary font-bold">
              {{ $t("login.alreadyLoggedIn") }}
            </p>
            <NuxtLink to="/listings" class="text-primary underline">
              {{ $t("login.goToListings") }}
            </NuxtLink>
          </div>
        </div>

        <Button
          :label="$t('general.login')"
          variant="secondary"
          :icon="ArrowRightIcon"
          classes="w-full"
          @click="navigateTo('/login')"
        />
      </div>
    </section>
  </div>
</template>
