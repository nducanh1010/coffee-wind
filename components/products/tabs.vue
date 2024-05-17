<script lang="ts" setup>
import type { IProductTabs } from "~/const/navigation";
import { productsTabs } from "~/const/navigation";
const emit = defineEmits<{
  changeTab: [index: number];
}>();
const currentTab = ref<IProductTabs | null>(null);
const tabsMenu = ref<HTMLDivElement | null>();
onMounted(() => {
  currentTab.value = productsTabs[0];
  tabsMenu.value &&
    tabsMenu.value.children[0].classList.add("ct-tab-item-active");
});
const handleSwitchTabs = (item: IProductTabs, index: number) => {
  currentTab.value = item;
  if (tabsMenu.value) {
    for (const children of tabsMenu.value.children) {
      children.classList.remove("ct-tab-item-active");
    }
    tabsMenu.value.children[index].classList.add("ct-tab-item-active");
    emit("changeTab", index);
  }
};
</script>
<template>
  <div class="w-[95%] mx-auto mt-24 flex flex-col items-center mb-24">
    <div class="text-4xl font-light mb-4">
      {{ currentTab?.title }}
    </div>
    <div
      class="font-normal w-full md:w-[560px] tracking-wide leading-8 text-center text-gray-800 mb-10"
    >
      {{ currentTab?.titleDescription }}
    </div>
    <div ref="tabsMenu" class="ct-tabs mb-4">
      <div
        v-for="(item, index) in productsTabs"
        @click="() => handleSwitchTabs(item, index)"
        class="ct-tab-item"
      >
        <span>{{ item.tabName }}</span>
      </div>
    </div>
  </div>
</template>
