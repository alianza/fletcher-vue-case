<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  @apply font-[Jost,_sans-serif];
}

input {
  @apply border-primary rounded-md border-2 p-2 outline-none disabled:opacity-25;
}

button {
  @apply disabled:opacity-35;
}
</style>
