<script setup>
import BoxContent from './BoxContent.vue';
const props = defineProps({
    content: {
        type: String,
        default: ""
    }
})
</script>
<template>
    <box-content>
        <template #title>
            <h1>Objective</h1>
        </template>
        <div class="whitespace-break-spaces text-left">
            {{ props.content }}
        </div>
    </box-content>
</template>
