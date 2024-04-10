<script setup>
import { MoreMugsList } from "~/const/data";
</script>
<template>
  <div class="ct-subheadline">
    <div class="ct-subheadline-deco-line"></div>
    <div class="ct-subheadline-label">More Products</div>
    <div class="ct-subheadline-deco-line"></div>
  </div>
  <div class="more-products w-[95%] lg:w-[65%] mx-auto mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
      <div v-for="(item, index) in MoreMugsList" class="ct-product-card">
        <div
          :style="`background-image: url( '/${item.pictureUrl}')`"
          class="h-[380px]  bg-cover bg-no-repeat bg-bottom"
        >
          <NuxtLink :href="item.to" alt="kofe-img">
            <div
              class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group"
            >
              <div
                v-if="item.discountPrice"
                class="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400"
              >
                On Sale.
              </div>
              <div
                class="ct-button absolute bottom-4 bg-white left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 w-11/12"
              >
                Explore Mug
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center my-8">
          <NuxtLink class="text-xl mb-3 hover:text-coffee-400">{{
            item.name
          }}</NuxtLink>
          <div class="">
            <span v-if="item.discountPrice" class="text-lg text-coffee-400"
              >$ {{ item.discountPrice.toFixed(2) }} USD</span
            >
            <span
              :class="item.discountPrice ? 'line-through' : ''"
              class="ml-2 text-gray-400"
              >$ {{ item.price.toFixed(2) }} USD</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
