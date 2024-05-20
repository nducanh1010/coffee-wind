<script setup lang="ts">
import { LifeStoryList, type ILifeStyleStory } from "~/const/data";
const currentSlide = ref<number>(0);
const lifeStoryData = ref<ILifeStyleStory[]>(LifeStoryList);
const handleNextSlide = () => {
  if (currentSlide.value === lifeStoryData.value.length - 1)
    return (currentSlide.value = 0);
  currentSlide.value++;
};
const handleBackSlide = () => {
  if (currentSlide.value === 0)
    return (currentSlide.value = lifeStoryData.value.length - 1);
  currentSlide.value--;
};
</script>
<template>
  <div class="w-full flex justify-center items-center gap-12 relative">
    <svg
      @click="() => handleBackSlide()"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8 text-gray-400 hover:text-gray-800 transition-all"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
    <!-- Slider Section -->
    <div class="ct-lifestyle-story-card h-[380px] w-[65%] flex overflow-hidden">
      <div
        :key="index"
        v-for="(item, index) in lifeStoryData"
        :style="`transform: translateX(-${currentSlide * 100}%);`"
        class="flex-shrink-0 h-full w-full gap-y-16 gap-x-8 flex transition-transform ease-out duration-1000 bg-repeat-x"
      >
        <div
          :style="`background-image: url( '/${item.pictureUrl}')`"
          class="h-full min-w-[460px] bg-cover bg-no-repeat bg-bottom"
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
        <div class="flex flex-col pl-8 justify-center items-start">
          <div
            class="text-gray-500 text-xs font-semibold tracking-[0.2em] leading-7 mb-3"
          >
            {{ item.label }}
          </div>

          <div class="text-3xl leading-10 text-gray-800 mb-3">
            {{ item.thumbnail }}
          </div>

          <div class="text-gray-600 font-light leading-7 mb-3">
            {{ item.description }}
          </div>

          <button
            type="submit"
            class="ct-button bg-gray-900 text-white w-max max-h-[54px]"
          >
            {{ item.action }}
          </button>
        </div>
      </div>
    </div>
    <div class="ct-currentSlide absolute bottom-0">
      <div class="flex items-center justify-center gap-2">
        <div
          v-for="(data, index) in lifeStoryData"
          :class="`${currentSlide === index ? '' : 'bg-opacity-50'}`"
          class="transition-all w-[5px] h-[5px] mb-[-4rem] bg-gray-800 rounded-full"
        ></div>
      </div>
    </div>
    <svg
      @click="() => handleNextSlide()"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8 text-gray-400 hover:text-gray-800 transition-all"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </div>
</template>
