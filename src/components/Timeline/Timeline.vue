<script setup>
import ItemTimeline from "./ItemTimeline.vue";
const props = defineProps({
  timelines: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
</script>
<template>
  <div>
    <item-timeline
      v-for="(item, idx) in props.timelines"
      :key="idx"
      :item="item"></item-timeline>
  </div>
</template>
