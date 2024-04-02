<template>
  <div id="root">
    <div
      class="content_wrapper max-w-screen-2xl text-base mx-auto px-8 bg-slate-200"
    >
      <Header />
      <main>
        <slot />
      </main>

      <Footer />
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
