<script setup lang="ts">
import { computed, defineProps } from "vue";
import {
  MapPinIcon,
  WifiIcon,
  ShoppingCartIcon,
  UsersIcon,
  CurrencyEuroIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon as HeartIconFilled,
} from "@heroicons/vue/24/solid";
import { HeartIcon } from "@heroicons/vue/24/outline";
import type { Hotel } from "~/types/types";
import Button from "~/components/common/button.vue";

useI18n();

const { hotel } = defineProps<{ hotel: Hotel }>();

const imageSrc = computed(() => `/hotels/hotel-${Math.floor(Math.random() * 6) + 1}.jpg`);
const rating = computed(() => (Math.random() * 5 + 5).toFixed(1));
const numReviews = computed(() => Math.floor(Math.random() * 500));
const icons = [
  { icon: WifiIcon, visible: Math.random() > 0.2 },
  { icon: ShoppingCartIcon, visible: Math.random() > 0.2 },
  { icon: UsersIcon, visible: Math.random() > 0.2 },
  { icon: CurrencyEuroIcon, visible: Math.random() > 0.2 },
  { icon: VideoCameraIcon, visible: Math.random() > 0.2 },
];

const favorited = ref(false);

onMounted(() => {
  favorited.value = Math.random() > 0.5;
});

const icon = computed(() => (favorited.value ? HeartIconFilled : HeartIcon));
</script>

<template>
  <div class="border-tertiary/50 grid grid-cols-4 gap-4 rounded-lg border-[1px] p-4">
    <div class="col-span-full lg:col-span-1">
      <div class="group relative h-full">
        <img
          :src="imageSrc"
          alt="Hotel Image"
          class="h-full w-full rounded-md object-cover transition-[transform,box-shadow] group-hover:scale-[102%] group-hover:shadow-xl"
        />
        <component
          :is="icon"
          @click="favorited = !favorited"
          class="text-secondary absolute right-4 top-4 size-8 cursor-pointer rounded-full bg-white p-2 transition-[transform,box-shadow] hover:scale-125 hover:shadow-xl"
        />
      </div>
    </div>

    <div class="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
      <div class="flex flex-col gap-6">
        <div>
          <a href="#" class="hover:underline">
            <h2 class="text-primary text-xl font-bold">{{ hotel.name }}</h2>
          </a>
          <div class="flex items-center gap-1">
            <MapPinIcon class="text-secondary size-4" />
            <p class="text-primary/50">{{ hotel.city }}, {{ hotel.province }}</p>
          </div>
        </div>
        <div class="flex gap-2">
          <template v-for="icon in icons">
            <component
              :is="icon.icon"
              v-if="icon.visible"
              class="text-secondary bg-secondary/10 size-8 rounded-full p-1 transition-[transform,box-shadow] hover:scale-125 hover:shadow-xl"
            />
          </template>
        </div>

        <div>
          <div
            v-for="text in [
              $t('listings.hotelCard.texts.1'),
              $t('listings.hotelCard.texts.2'),
              $t('listings.hotelCard.texts.3'),
            ]"
            class="flex items-center gap-2"
          >
            <CheckCircleIcon class="text-secondary size-4" />
            <p class="text-primary">{{ text }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2 self-start">
          <div class="bg-primary rounded-md p-4 font-bold text-white">
            {{ rating }}
          </div>
          <div>
            <p class="text-primary font-medium">{{ $t(`listings.hotelCard.rating.${rating.charAt(0)}`) }}</p>
            <p class="text-sm text-black/50">{{ $t("listings.hotelCard.reviews", { count: numReviews }) }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end justify-between gap-2">
        <div class="bg-secondary ml-auto flex flex-col items-center rounded-md p-2 text-white max-sm:w-full">
          <p class="text-xl font-bold">€{{ hotel.price }}</p>
          <p>{{ $t("listings.hotelCard.perPersonPerNight") }}</p>
          <p>{{ $t("listings.hotelCard.excludingBreakfast") }}</p>
        </div>

        <div class="flex w-full flex-row-reverse flex-wrap items-end gap-2">
          <Button
            variant="tertiary"
            classes="max-sm:w-full"
            :icon="InformationCircleIcon"
            :label="$t('listings.hotelCard.moreInfo')"
          />
          <Button
            variant="primary"
            classes="max-sm:w-full"
            :icon="ArrowRightIcon"
            :label="$t('listings.hotelCard.chooseDate')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
