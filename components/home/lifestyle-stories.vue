<script setup>
import { LifeStoryList } from "~/const/data";
</script>
<template>
  <div class="ct-subheadline">
    <div class="ct-subheadline-deco-line"></div>
    <div class="ct-subheadline-label">BEHIND THE MUGS, LIFESTYLE STORIES</div>
    <div class="ct-subheadline-deco-line"></div>
  </div>
  <div class="lifestyle-stories w-[95%] xl:w-[65%] mx-auto mb-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
      <div
        v-for="(item, index) in LifeStoryList"
        class="ct-lifestyle-story-card"
      >
        <div
          :style="`background-image: url( '/${item.pictureUrl}')`"
          class="h-[300px] bg-cover bg-no-repeat bg-bottom"
        >
          <NuxtLink :href="item.to" alt="story-img">
            <div
              class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group"
            >
              <div
                class="ct-button absolute bottom-4 bg-white left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 w-11/12"
              >
                Read the full story
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="text-left my-6">
          <NuxtLink class="text-xl mb-3 hover:text-coffee-400">{{
            item.thumbnail
          }}</NuxtLink>
          <div class="text-gray-500 leading-7 mb-3">
            {{ item.description }}
          </div>
          <div class="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
            {{ item.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
