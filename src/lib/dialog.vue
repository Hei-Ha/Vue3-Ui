<template>
  <div class="dialog-overlay"></div>
  <div class="=dialog-wrapper">
    <header>标题</header>
    <main>
      内容
    </main>
    <footer>确定取消</footer>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      Type: String
    }
  }
}
</script>

<style scoped>

</style>