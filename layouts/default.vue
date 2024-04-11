<template>
  <div id="root">
    <div
      class="content_wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8"
    >
      <LayoutHeader />
      <main>
        <slot />
      </main>

      <LayoutFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("CoffeeStyle");

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
});
</script>
