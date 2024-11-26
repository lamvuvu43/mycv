<script setup>
import Avatar from "./Avatar.vue";
import ContactInfo from "./ContactInfo.vue";
import Objective from "./Objective.vue";
import Skill from "./Skill/Skill.vue";
import Interest from "./Interest.vue";

console.log("demo template");
const props = defineProps({
  infoCv: {
    type: Object,
    default: function () {
      return {};
    },
  },
});
</script>
<template>
  <div class="flex">
    <div class="bg-primary min-h-screen w-[250px]">
      <div class="flex flex-col gap-5">
        <avatar
          :avatar_url="infoCv.avatar_url"
          :fullname="infoCv.fullname"
          :position="infoCv.position">
        </avatar>
        <contact-info class="pl-5" :info="infoCv.contact_info"></contact-info>
        <objective class="pl-5" :content="infoCv.objective"></objective>
        <skill class="pl-5" :skills="infoCv.skills"></skill>
        <interest class="pl-5" :interests="infoCv.interests"></interest>
      </div>
    </div>
    <div class="flex-1 min-w-[700px] bg-slate-300">
      <div class="">advanced info</div>
    </div>
  </div>
</template>
