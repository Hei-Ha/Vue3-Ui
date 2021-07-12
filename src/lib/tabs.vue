<template>
  <div>
    <div v-for="(t, index) in titles" :key="t + index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
  </div>
</template>

<script>
import Tab from './tab.vue'
export default {
  name: 'tabs',
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('子标签必须是 tab')
      }
    })
    const titles = defaults.map((item) => {
      return item.props.title
    })
    return {
      defaults,
      titles
    }
  }
}
</script>

<style scoped>

</style>