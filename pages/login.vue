<script setup lang="ts">
import { ArrowRightIcon, AtSymbolIcon } from "@heroicons/vue/24/solid";
import Input from "~/components/common/input.vue";
import Button from "~/components/common/button.vue";
import RegisterBanner from "~/components/common/registerBanner.vue";
import PasswordInput from "~/components/common/passwordInput.vue";
import { login } from "~/lib/services/loginService";

const { t } = useI18n();

const email = ref("");
const password = ref("");
const message = ref("");
const wiggleButton = ref(false);
const isLoading = ref(false);

const user = useCookie("user");
const apiToken = useCookie("apiToken");

const isUserLoggedIn = computed(() => !!user.value);

const handleLogin = () => {
  isLoading.value = true;
  login(email.value, password.value)
    .then((res) => {
      user.value = res.user;
      apiToken.value = res.apiToken;
      navigateTo("/listings");
    })
    .catch(() => {
      message.value = t("login.error");
      wiggleButton.value = true;
      setTimeout(() => (wiggleButton.value = false), 500);
    })
    .finally(() => (isLoading.value = false));
};
</script>

<template>
  <div class="flex w-full p-4">
    <section class="m-auto flex max-w-[900px] grow flex-col-reverse rounded-md bg-white shadow md:flex-row">
      <div class="flex-3 flex grow flex-col gap-6 p-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-primary text-xl font-bold">
            {{ $t("login.title") }}
          </h1>
          <p>{{ $t("login.emailMessage") }}</p>
        </div>

        <Transition>
          <p v-if="message" class="text-danger font-bold">{{ message }}</p>
        </Transition>

        <Transition>
          <div v-if="isUserLoggedIn" class="flex gap-1">
            <p class="text-primary font-bold">
              {{ $t("login.alreadyLoggedIn") }}
            </p>
            <NuxtLink to="/listings" class="text-primary underline">
              {{ $t("login.goToListings") }}
            </NuxtLink>
          </div>
        </Transition>

        <form class="flex flex-col gap-4" @submit.prevent="handleLogin" @input="message = ''">
          <Input
            v-model="email"
            :label="$t('general.email')"
            :icon="AtSymbolIcon"
            type="email"
            :disabled="isUserLoggedIn"
            required
          />

          <PasswordInput
            v-model="password"
            :label="$t('general.password')"
            :iconAfter="ArrowRightIcon"
            minlength="8"
            :disabled="isUserLoggedIn"
            required
          />

          <Button
            :label="$t('general.continue')"
            variant="secondary"
            :icon="ArrowRightIcon"
            :classes="`w-full ${wiggleButton ? 'motion-safe:animate-wiggle' : ''}`"
            :disabled="isUserLoggedIn"
            type="submit"
            :loading="isLoading"
          />
        </form>
      </div>

      <RegisterBanner />
    </section>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
