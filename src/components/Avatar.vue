<script setup>
const props = defineProps({
    avatar_url: {
        type: String,
        default: ""
    },
    fullname: {
        type: String,
        default: ""
    },
    position: {
        type: String,
        default: ""
    }
})
</script>
<template>
    <div class="h-[300px] w-[250px] bg-[#28699A] flex  flex-col gap-5 items-center justify-center">
        <div class="w-auto mx-5">
            <img :src="props.avatar_url" lazy alt="my-avatar" style="object-fit: cover;border-radius: 50%;" />
        </div>
        <div class="text-[#fff]">
            <h1 class="font-semibold">{{ props.fullname }}</h1>
            <h4>{{ props.position }}</h4>
        </div>
    </div>
</template>
