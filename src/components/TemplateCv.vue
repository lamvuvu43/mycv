<script setup>
import Avatar from "./Avatar.vue";
import ContactInfo from "./ContactInfo.vue";
import Objective from "./Objective.vue";
import Skill from "./Skill/Skill.vue";
import Interest from "./Interest.vue";
import Timeline from "./Timeline/Timeline.vue";

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
          avatar_url="https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/459882640_2536544426531755_3318922635172065841_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGaV_WEk8E2gwwH3s-nPDUDeCJOxhj7SPZ4Ik7GGPtI9l4aapIC2J3_Rnpo2LGXpVOaeom81449zGyiyGGDwnQJ&_nc_ohc=V6YvCRgAvnIQ7kNvgGJXe5O&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=AdWQ-EXIfFf52OguO9eO9HN&oh=00_AYDOG2UBavpdxtttLDzDtJ5vd4_HLVcFf52zA3GZEVb0LA&oe=675C744D"
          :fullname="infoCv.fullname"
          :position="infoCv.position">
        </avatar>
        <contact-info class="pl-5" :info="infoCv.contact_info"></contact-info>
        <objective class="pl-5" :content="infoCv.objective"></objective>
        <skill class="pl-5" :skills="infoCv.skills"></skill>
        <interest class="pl-5" :interests="infoCv.interests"></interest>
      </div>
    </div>
    <div class="flex-1 w-[650px] bg-[#fff]">
      <timeline :timelines="infoCv.timelines"></timeline>
    </div>
  </div>
</template>
