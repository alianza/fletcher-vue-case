<script setup lang="ts">
import { EnvelopeIcon, CreditCardIcon } from "@heroicons/vue/24/solid";
import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/vue/24/outline";
import { capitalize } from "~/lib/utils";

const paymentMethods = ["visa", "mastercard", "ideal", "paypal"];
const hotels = ["Amsterdam", "Rotterdam", "Utrecht", "Maastricht", "Zwolle", "Deventer", "Eindhoven"];
const links = ["Vakanties", "Feestdagen", "Evenementen", "Feesten", "Kids"];
const reservations = ["Hotel", "Restaurant", "E-Bike", "Sloep", "Bowling"];
const services = ["Contact", "FAQ", "Cadeaukaarten", "Annuleringen", "Klachten"];

useI18n();
</script>

<template>
  <footer class="flex flex-col">
    <div class="bg-primary flex justify-evenly gap-2 p-4 max-sm:flex-col">
      <div class="flex shrink-0 items-center gap-2 sm:w-1/3">
        <EnvelopeIcon class="size-16 shrink-0 text-white" />
        <p class="font-bold text-white">{{ $t("appFooter.newsletter.cta") }}</p>
      </div>
      <div class="flex items-center sm:w-1/4 sm:min-w-[300px]">
        <form class="flex w-full justify-center">
          <input
            type="email"
            :placeholder="$t('appFooter.newsletter.emailPlaceholder')"
            class="w-full rounded-none rounded-l-md border-2 border-white p-4"
          />
          <button type="submit" class="text-primary bg-secondary group rounded-r-md p-4">
            <EnvelopeIcon class="size-6 text-white transition-transform group-hover:scale-125 group-active:scale-95" />
          </button>
        </form>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-8 bg-white p-6">
      <img src="~/assets/companies/greenkey.png" alt="Greenkey Logo" class="w-12" />
      <img src="~/assets/companies/horeca-nederland.png" alt="Greenkey Logo" class="w-12" />
      <div class="my-2 w-px self-stretch bg-gray-200 max-sm:hidden" />
      <p class="text-primary max-sm:hidden">{{ $t("appFooter.payments.weAccept") }}</p>
      <img
        v-for="method in paymentMethods"
        :src="`/payment-methods/${method}.png`"
        :alt="`${capitalize(method)} Logo`"
        class="h-6 rounded-sm outline outline-1 outline-offset-8 outline-gray-200"
      />
      <div
        class="text-primary flex h-8 items-center gap-1 rounded-sm text-sm font-bold outline outline-1 outline-offset-8 outline-gray-200"
      >
        <CreditCardIcon class="mx-1 size-6" />
        {{ $t("appFooter.payments.payInHotel") }}
      </div>
      <div class="my-2 w-px self-stretch bg-gray-200 max-sm:hidden" />
      <div
        class="text-primary flex h-8 items-center gap-1 rounded-sm outline outline-1 outline-offset-8 outline-gray-200"
      >
        <ShieldCheckIcon class="text-secondary mx-1 size-6" />
        <div class="flex flex-col">
          <span class="text-sm font-bold">{{ $t("appFooter.payments.privacy.title") }}</span>
          <span class="text-xs">{{ $t("appFooter.payments.privacy.subtitle") }}</span>
        </div>
      </div>
      <div
        class="text-primary flex h-8 items-center gap-1 rounded-sm outline outline-1 outline-offset-8 outline-gray-200"
      >
        <LockClosedIcon class="text-success mx-1 size-6" />
        <div class="flex flex-col">
          <span class="text-sm font-bold">{{ $t("appFooter.payments.security.title") }}</span>
          <span class="text-xs">{{ $t("appFooter.payments.security.subtitle") }}</span>
        </div>
      </div>
    </div>

    <div class="bg-tertiary/50 text-primary">
      <div class="container mx-auto grid grid-cols-2 gap-12 p-8 sm:grid-cols-3 lg:grid-cols-6">
        <div class="col-span-2 flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-bold">{{ $t("appFooter.links.story.title") }}</h3>
            <p>
              {{ $t("appFooter.links.story.text") }}
            </p>
          </div>
          <div>
            <span>{{ $t("appFooter.links.followUs") }}</span>
            <div class="flex gap-2">
              <div
                v-for="icon in ['facebook', 'instagram', 'tiktok', 'linkedin']"
                class="bg-primary rounded-full p-2 hover:scale-105"
              >
                <a href="#">
                  <img :src="`/social-media/${icon}.svg`" :alt="`${capitalize(icon)} Icon`" class="w-5 rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">{{ $t("appFooter.links.hotels") }}</h3>

          <div class="flex flex-col gap-2">
            <a v-for="hotel in hotels" href="#" class="hover:underline">{{ hotel }}</a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">{{ $t("appFooter.links.usefulLinks") }}</h3>
          <div class="flex flex-col gap-2">
            <a v-for="link in links" href="#" class="hover:underline">{{ link }}</a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">{{ $t("appFooter.links.reserve") }}</h3>
          <div class="flex flex-col gap-2">
            <a v-for="reservation in reservations" href="#" class="hover:underline">{{ reservation }}</a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">{{ $t("appFooter.links.customerService") }}</h3>
          <div class="flex flex-col gap-2">
            <a v-for="service in services" href="#" class="hover:underline">{{ service }}</a>
          </div>
        </div>

        <div class="col-span-full flex flex-wrap justify-between gap-x-4 gap-y-6 pt-8">
          <div class="flex gap-2">
            <span class="font-bold">©{{ new Date().getFullYear() }} {{ $t("footer.fletcher") }}</span>
            |
            <span>{{ $t("footer.allRightsReserved") }}</span>
          </div>

          <div class="flex flex-wrap gap-4 lg:shrink-0">
            <a class="hover:underline" href="#">{{ $t("footer.terms") }}</a>
            |
            <a class="hover:underline" href="#">{{ $t("footer.cookies") }}</a>
            |
            <a class="hover:underline" href="#">{{ $t("footer.privacy") }}</a>
            |
            <a class="hover:underline" href="#">{{ $t("footer.Disclaimer") }}</a>
            |
            <a class="hover:underline" href="#">{{ $t("footer.lowestPrice") }}</a>
            |
            <a class="hover:underline" href="#">{{ $t("footer.houseRules") }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
