<script setup lang="ts">
import Header from "~/components/authed/header.vue";
import Footer from "~/components/authed/footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
