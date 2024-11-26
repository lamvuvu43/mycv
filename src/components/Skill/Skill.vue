<script setup>
import BoxContent from '../BoxContent.vue';
import Item from './Item.vue';

const props = defineProps({
    skills: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>
<template>
    <box-content>
        <template #title>
            <h1 class="uppercase">Skills</h1>
        </template>
        <item v-for="(item, idx) in skills" :key="idx" :item="item"></item>
    </box-content>

</template>