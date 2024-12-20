// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/eslint", "@nuxt/image", "@nuxt/fonts"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#063073",
            secondary: "#FD6E3A",
            tertiary: "#D1F0FF",
            danger: "#DD0000",
            success: "#22C55E",
          },
          flex: {
            "2": "2 2 0%",
            "3": "3 3 0%",
          },
          animation: {
            wiggle: "wiggle 0.2s ease-in-out infinite",
          },
          keyframes: {
            wiggle: {
              "0%, 100%": { transform: "rotate(-1deg)" },
              "50%": { transform: "rotate(1deg)" },
            },
          },
        },
      },
    },
  },
});
