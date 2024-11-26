<script setup>
import BoxContent from './BoxContent.vue';

const props = defineProps({
    info: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
</script>
<template>
    <box-content>
        <ul class="text-[#fff]">
            <li v-if="info.birthday" class="flex items-center gap-2 leading-8">
                <icon icon="mingcute:birthday-2-line"></icon>
                <span>{{ info.birthday }}</span>
            </li>
            <li v-if="info.gender" class="flex items-center gap-2 leading-8">
                <icon icon="icons8:gender"></icon>
                <span>{{ info.gender }}</span>
            </li>
            <li v-if="info.phone_number" class="flex items-center gap-2 leading-8">
                <icon icon="mdi-light:phone"></icon>
                <span>{{ info.phone_number }}</span>
            </li>
            <li v-if="info.email" class="flex items-center gap-2 leading-8">
                <icon icon="ic:outline-email"></icon>
                <span>{{ info.email }}</span>
            </li>
            <li v-if="info.address" class="flex items-center gap-2 leading-8">
                <icon icon="tabler:address-book"></icon>
                <span>{{ info.address }}</span>
            </li>
        </ul>
    </box-content>
</template>
