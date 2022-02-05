<template>
  <article class="markdown-body" v-html="introMdContent"></article>
</template>

<script setup>
import { ref } from 'vue'
import introMd from './md/intro.md'
const introMdContent = ref(introMd)
</script>

<style scoped>

</style>