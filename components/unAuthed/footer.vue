<script setup lang="ts">
useI18n();
</script>

<template>
  <footer
    class="bg-tertiary/50 text-primary flex justify-around gap-4 px-4 py-8"
  >
    <span class="font-bold"
      >©{{ new Date().getFullYear() }} {{ $t("footer.fletcher") }}</span
    >

    <div class="flex gap-4">
      <a class="hover:underline" href="#">{{ $t("footer.terms") }}</a>
      |
      <a class="hover:underline" href="#">{{ $t("footer.cookies") }}</a>
      |
      <a class="hover:underline" href="#">{{ $t("footer.privacy") }}</a>
    </div>
  </footer>
</template>
