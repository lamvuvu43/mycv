<script setup>
import ItemDetailTimeline from "./ItemDetailTimeline.vue";
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
  <div class="px-5">
    <div class="mt-5 text-left">
      <div class="font-semibold flex justify-between">
        <h1>{{ item.title }}</h1>
        <span>{{ item.timeline }}</span>
      </div>
      <span class="font-thin">{{ item.type }}</span>
    </div>
    <item-detail-timeline :items="item.contents"></item-detail-timeline>
  </div>
</template>
