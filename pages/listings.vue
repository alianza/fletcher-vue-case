<script setup lang="ts">
import { ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { AdjustmentsVerticalIcon, HomeIcon } from "@heroicons/vue/24/outline";
import type { Hotel, ListingsLinks, ListingsMeta } from "~/types/types";
import Loader from "~/components/common/loader.vue";
import HotelCard from "~/components/authed/hotelCard.vue";
import { getFilters, getListings, getSortingItems } from "~/lib/services/listingsService";

definePageMeta({ layout: "app" });

const { t } = useI18n();

const isLoading = ref(true);
const message = ref("");

const data = ref<Hotel[]>([]);
const meta = ref<ListingsMeta>(null);
const links = ref<ListingsLinks>(null);

const sort = ref("+price");

const selectedFilters = ref<{ [key: string]: string[] }>({
  province: [],
  theme: [],
  surroundings: [],
});

const handlePagination = (url?: string) => {
  handleGetListings(url);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleGetListings = (url?: string) => {
  isLoading.value = true;
  message.value = "";

  const filtersPayload = Object.entries(selectedFilters.value).reduce(
    (acc: { [key: string]: string[] }, [key, values]) => {
      if (values.length > 0) acc[key] = values;
      return acc;
    },
    {},
  );

  getListings({ sort: sort.value, ...filtersPayload }, url)
    .then((res) => {
      data.value = res.data;
      meta.value = res.meta;
      links.value = res.links;
    })
    .catch(() => {
      message.value = t("listings.error");
      data.value = [];
      meta.value = null;
      links.value = null;
    })
    .finally(() => {
      isLoading.value = false;
    });
};

onMounted(() => {
  handleGetListings();
});

const onFilterChange = (filterKey: string, value: string) => {
  const filter = selectedFilters.value[filterKey];
  const index = filter.indexOf(value);
  const isSelected = index === -1;
  isSelected ? filter.push(value) : filter.splice(index, 1);
};

const sortingItems = computed(() => getSortingItems(t));
const filters = computed(() => getFilters(t));
</script>

<template>
  <div class="flex w-full flex-col">
    <div class="bg-tertiary/50 flex items-center justify-center px-4 py-8">
      <h1 class="text-primary text-lg font-bold">{{ $t("listings.title") }}</h1>
    </div>

    <div class="border-tertiary container mx-auto flex justify-between gap-2 border-b-[1px] px-4 py-8">
      <div class="flex items-center justify-center gap-2">
        <NuxtLink to="/" class="transition-transform hover:scale-125 active:scale-95">
          <HomeIcon class="text-primary size-4" />
        </NuxtLink>
        <ChevronRightIcon class="text-tertiary size-4" />
        <span class="text-primary font-medium">{{ $t("listings.breadcrumbItem") }}</span>
      </div>
      <div>
        <div class="relative">
          <select
            class="border-tertiary text-primary focus-within:border-primary appearance-none rounded-md border-[1px] px-4 py-3 pr-10 text-sm font-bold focus-visible:outline-none"
            v-model="sort"
            @change="handleGetListings()"
          >
            <option v-for="(label, value) in sortingItems" :value="value">{{ label }}</option>
          </select>
          <AdjustmentsVerticalIcon class="text-primary absolute right-2 top-4 z-10 mr-2 size-4" />
        </div>
      </div>
    </div>

    <div class="container mx-auto grid grow grid-cols-1 p-4 lg:grid-cols-4">
      <div class="col-span-1">
        <div class="flex flex-col gap-4 p-4">
          <div v-for="(filter, key) in filters" :key="key" class="flex flex-col gap-4">
            <details open class="max-lg:hidden">
              <summary class="text-primary cursor-pointer font-bold">
                {{ filter.label }}
              </summary>
              <div class="open:bg-red-100">
                <form class="mt-2 flex flex-col gap-2" @change="handleGetListings()">
                  <label v-for="option in filter.options" :key="option.value" class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      :value="option.value"
                      class="outline-primary rounded outline outline-2 -outline-offset-2"
                      @change="onFilterChange(key, option.value)"
                      :checked="selectedFilters[key].includes(option.value)"
                    />
                    <span class="text-primary">{{ option.label }}</span>
                  </label>
                </form>
              </div>
            </details>

            <details class="lg:hidden">
              <summary class="text-primary cursor-pointer font-bold">
                {{ filter.label }}
              </summary>
              <div class="open:bg-red-100">
                <form class="mt-2 flex flex-col gap-2" @change="handleGetListings()">
                  <label v-for="option in filter.options" :key="option.value" class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      :value="option.value"
                      class="outline-primary rounded outline outline-2 -outline-offset-2"
                      @change="onFilterChange(key, option.value)"
                      :checked="selectedFilters[key].includes(option.value)"
                    />
                    <span class="text-primary">{{ option.label }}</span>
                  </label>
                </form>
              </div>
            </details>

            <div class="bg-tertiary h-px w-full" v-if="key !== Object.keys(filters)[Object.keys(filters).length - 1]" />
          </div>
        </div>
      </div>

      <loader class="col-span-3 m-auto" size="size-12" v-if="isLoading" />
      <div class="text-primary col-span-3 m-auto p-6 text-center font-bold" v-else-if="message">{{ message }}</div>

      <div class="col-span-3 mb-16 flex flex-col gap-8" v-if="data.length > 0 && !isLoading">
        <div class="flex flex-col gap-4">
          <div v-if="meta" class="bg-tertiary/50 text-primary rounded-md p-4 font-bold">
            {{ $t("listings.hotelCount", { count: meta.total }) }}
          </div>
          <div class="flex flex-col gap-4">
            <HotelCard v-for="hotel in data" :key="hotel.id" :hotel="hotel" />
          </div>
        </div>
        <div v-if="meta && links" class="flex items-center justify-center gap-4">
          <button
            :disabled="!links.prev"
            @click="handlePagination(links.prev)"
            class="bg-secondary rounded-full p-3 text-white disabled:bg-gray-400"
          >
            <ArrowLeftIcon class="size-6" />
          </button>

          <span class="text-primary font-medium"> {{ meta.currentPage }} / {{ meta.lastPage }} </span>

          <button
            :disabled="!links.next"
            @click="handlePagination(links.next)"
            class="bg-secondary rounded-full p-3 text-white disabled:bg-gray-400"
          >
            <ArrowRightIcon class="size-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
