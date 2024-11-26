<script setup>
import Avatar from './Avatar.vue';
import ContactInfo from './ContactInfo.vue';
import Objective from './Objective.vue';
import Skill from './Skill/Skill.vue';
import Interest from "./Interest.vue"

console.log("demo template")
const props = defineProps({
    infoCv: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
</script>
<template>
    <div class="flex  bg-slate-300">
        <div class="bg-primary min-h-screen">
            <div class="flex flex-col gap-5 w-[250px]">
                <avatar :avatar_url="infoCv.avatar_url" :fullname="infoCv.fullname" :position="infoCv.position">
                </avatar>
                <contact-info class="pl-5" :info="infoCv.contact_info"></contact-info>
                <objective class="pl-5" :content="infoCv.objective"></objective>
                <skill class="pl-5" :skills="infoCv.skills"></skill>
                <interest class="pl-5" :interests="infoCv.interests"></interest>
            </div>
        </div>
        <div class="flex-1">
            advanced info
        </div>
    </div>
</template>