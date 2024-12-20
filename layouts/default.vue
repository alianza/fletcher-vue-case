<script setup lang="ts">
import Header from "~/components/unAuthed/header.vue";
import Footer from "~/components/unAuthed/footer.vue";
</script>

<template>
  <div
    class="absolute -z-10 h-[50vh] w-full bg-[url('~/assets/banners/bg-cover.jpg')] bg-cover bg-center [clip-path:ellipse(100%_100%_at_50%_0%)]"
  >
    <div class="bg-primary h-[50vh] bg-opacity-65"></div>
  </div>

  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
