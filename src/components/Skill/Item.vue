<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: function () {
            return {
                title: "HTML, CSS",
                value: 80
            }
        }
    }
})
</script>
<template>
    <div class="my-1">
        <div class="text-left">{{ item.title }}</div>
        <div class="relative">
            <div class="bg-[#fff] h-[10px]"></div>
            <div class="bg-[#28699A] h-[10px] absolute top-0" :style="{ width: `${item.value}%` }"></div>
        </div>
    </div>
</template>
