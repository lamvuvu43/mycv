<script setup>
import BoxContent from './BoxContent.vue';
const props = defineProps({
    interests: {
        type: Array,
        default: function () {
            return [];
        }
    }
})
</script>
<template>
    <box-content>
        <template #title>
            <h1 class="uppercase">Interests</h1>
        </template>
        <ul class="text-left list-disc list-inside">
            <li class="gap-2 leading-8" v-for="(item, idx) in interests" :key="idx">{{ item }}</li>
        </ul>
    </box-content>
</template>
