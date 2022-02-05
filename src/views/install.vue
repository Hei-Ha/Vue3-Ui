<template>
  <div class="markdown-body" v-html="installMdContent" />
</template>


<script setup>
import { ref } from 'vue'
import installMD from './md/install.md'
const installMdContent = ref(installMD)
</script>

<style scoped>

</style>