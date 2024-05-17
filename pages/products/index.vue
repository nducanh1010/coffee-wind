<script lang="ts" setup>
import { type IProductTabs } from "~/const/navigation";
const tab = ref<number | null>(0);
const handleChangeTab = (index: number) => {
  tab.value = index;
};
</script>
<template>
  <products-tabs @change-tab="(index:number) => handleChangeTab(index)" />
  <lazy-base-slider />
  <lazy-products-list v-if="tab === 0" v-lazy />
</template>
