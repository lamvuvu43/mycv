<script setup>
import TemplateCv from "./components/TemplateCv.vue";
import infoCv from "./Data/info";

console.log(infoCv);
</script>

<template>
  <template-cv :info-cv="infoCv"></template-cv>
</template>
