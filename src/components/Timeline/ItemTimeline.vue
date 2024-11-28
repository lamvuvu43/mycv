<script setup>
import DetailTimeline from "./DetailTimeline.vue";
const props = defineProps({
  item: {
    type: Object,
    default: function () {
      return {};
    },
  },
});
</script>
<template>
  <div class="pl-5 pt-5 text-[#333]">
    <div class="flex items-center gap-5">
      <div
        class="rounded-full bg-[#28699A] w-[40px] h-[40px] flex justify-center text-[#fff]">
        <icon :icon="item.icon" class="text-[25px] mx-0 my-auto"></icon>
      </div>
      <h1 class="text-xl uppercase font-semibold">{{ item.title }}</h1>
    </div>
    <detail-timeline
      v-for="(item, idx) in item.details"
      :key="idx"
      :item="item" />
  </div>
</template>
