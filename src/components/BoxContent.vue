<script setup>
</script>
<template>
    <div class="text-[#fff] flex flex-col gap-3 mr-5">
        <div v-if="$slots.title" class="text-left">
            <slot name="title">
            </slot>
        </div>
        <slot></slot>
    </div>
</template>
