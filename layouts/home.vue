<template>
  <div id="root">
    <div
      class="content-wrapper ct-no-parallax font-Karla text-base mx-auto px-8"
    >
      <LayoutHeader />
      <home-slider />
      <!--End of slider-->
      <home-story />
      <!--End of story-->
      <home-featured-mugs />
      <!--End of featured-mugs-->
      <home-more-products />
      <!--End of more-products-->
      <home-coffee-magazine />
      <!--End of coffee-magazine-->
      <slot />
    </div>
    <home-parallax />
    <!-- End of parallax -->
    <div
      class="content-wrapper ct-no-parallax font-Karla text-base mx-auto px-8"
    >
      <home-lifestyle-stories />
      <!--End of lifestyle-stories-->

      <home-subscribe />
      <!--End of subscribe-us-->
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
