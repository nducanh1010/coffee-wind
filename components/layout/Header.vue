import { NuxtLink } from '#build/components';
<script setup>
import { ref,watchEffect } from "vue";
const topMenu = ref(null);
const toggleTopMenu = ref(null);
const isExpanded = ref(false);
onMounted(() => {
  document.addEventListener("click", handleClickTopMenu);
});
const handleClickTopMenu = (event) => {
  // click iside icon
  if (toggleTopMenu.value.contains(event.target)) {
    isExpanded.value = !isExpanded.value;
    return;
  }
  if (topMenu.value.classList.contains("ct-topmenu-expanded")) {
    isExpanded.value = false;
  }
};
// click outside dropdown icon
const handleDropDown = () => {};
</script>
<template>
  <header class="p-6 mx-auto">
    <nav class="flex flex-row justify-between items-center relative">
      <div
        class="logo basis-2/6 text-center text-xl font-semibold cursor-pointer"
      >
        CoffeeStyle.
      </div>
      <ul
        ref="topMenu"
        id="ct-top-menu"
        :class="isExpanded ? 'ct-topmenu-expanded ' : 'hidden'"
        class="basis-3/6 lg:flex lg:justify-end lg:items-center lg:gap-8 uppercase text-sm text-gray-500 font-medium"
      >
        <li class="ct-top-menu-item">
          <NuxtLink href="#">Home</NuxtLink>
        </li>
        <li class="ct-top-menu-item ct-top-menu-item-active">
          <NuxtLink href="#">Products</NuxtLink>
        </li>
        <li class="ct-top-menu-item">
          <NuxtLink href="#">Blog</NuxtLink>
        </li>
        <li class="ct-top-menu-item">
          <NuxtLink href="#">About</NuxtLink>
        </li>
        <li class="ct-top-menu-item">
          <NuxtLink href="#">Contact</NuxtLink>
        </li>
        <li class="ct-top-menu-item">
          <NuxtLink href="#">StyleGuide</NuxtLink>
        </li>
        <li class="ct-top-menu-item">
          <NuxtLink href="#" target="blank">GrassDeveloper</NuxtLink>
        </li>
      </ul>
      <ul
        class="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium"
      >
        <li class="ct-top-menu-item">
          <NuxtLink href="#" target="blank" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="ct-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span class="mx-2">Cart</span
            ><span class="ct-badge-circle bg-orange-400 text-white">10</span>
          </NuxtLink>
        </li>
      </ul>
      <div
        class="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-4"
      >
        <svg
          ref="toggleTopMenu"
          @click="handleDropDown"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="ct-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>
