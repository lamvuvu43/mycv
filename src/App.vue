<script setup>
import TemplateCv from './components/TemplateCv.vue';
import infoCv from './Data/info';

console.log(infoCv)
</script>

<template>
  <template-cv :info-cv="infoCv"></template-cv>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
