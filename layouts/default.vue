<template>
  <div id="root">
    <div class="content_wrapper">
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
