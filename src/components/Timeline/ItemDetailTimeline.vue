<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
</script>
<template>
  <div class="flex flex-col text-left mt-3 font-thin">
    <span v-for="(item, idx) in props.items" :key="idx">{{ item }}</span>
  </div>
</template>
