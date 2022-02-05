<template>
  <div>
    <div class="markdown-body" v-html="mdContent"></div>
  </div>
</template>

<script setup>
import md from './md/getStart.md'
import { ref } from 'vue'
const mdContent = ref(md)
</script>

<style scoped></style>