import type { ComposerTranslation } from "vue-i18n";

export async function getListings(
  filters?: { sort?: string; theme?: string; facilities?: string; province?: string },
  url?: string,
) {
  try {
    return await $fetch("/api/listings", {
      method: "post",
      body: {
        ...(filters && { filters }),
        ...(url && { url }),
      },
    });
  } catch (error) {
    console.error(`error`, error); // unable to differentiate between actual errors and no results found
  }
}

export function getFilters(t: ComposerTranslation) {
  return {
    province: {
      label: t("listings.filters.province.title"),
      options: [
        { label: "Noord-Holland", value: "Noord-Holland" },
        { label: "Zuid-Holland", value: "Zuid-Holland" },
        { label: "Utrecht", value: "Utrecht" },
        { label: "Gelderland", value: "Gelderland" },
        { label: "Noord-Brabant", value: "Noord-Brabant" },
        { label: "Limburg", value: "Limburg" },
        { label: "Overijssel", value: "Overijssel" },
        { label: "Flevoland", value: "Flevoland" },
        { label: "Groningen", value: "Groningen" },
        { label: "Drenthe", value: "Drenthe" },
        { label: "Friesland", value: "Friesland" },
        { label: "Zeeland", value: "Zeeland" },
      ],
    },
    theme: {
      label: t("listings.filters.theme.title"),
      options: [
        { label: t("listings.filters.theme.options.coast"), value: "coast" },
        { label: t("listings.filters.theme.options.hike"), value: "hike" },
        { label: t("listings.filters.theme.options.restaurant"), value: "restaurant" },
        { label: t("listings.filters.theme.options.wellness"), value: "wellness" },
      ],
    },
    surroundings: {
      label: t("listings.filters.surroundings.title"),
      options: [
        { label: t("listings.filters.surroundings.options.beach"), value: "beach" },
        { label: t("listings.filters.surroundings.options.nature"), value: "nature" },
        { label: t("listings.filters.surroundings.options.museum"), value: "museum" },
        { label: t("listings.filters.surroundings.options.amusement_park"), value: "amusement_park" },
        { label: t("listings.filters.surroundings.options.zoo"), value: "zoo" },
        { label: t("listings.filters.surroundings.options.golf_course"), value: "golf_course" },
        { label: t("listings.filters.surroundings.options.city_centre"), value: "city_centre" },
      ],
    },
  };
}

export function getSortingItems(t: ComposerTranslation) {
  return {
    "+price": t("listings.sorting.priceAsc"),
    "-price": t("listings.sorting.priceDesc"),
  };
}
