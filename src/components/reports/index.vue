<template>
  <div>
    <component :is="options.type"></component>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
      default: () => { return {}}
    }
  },
  data() {
    return {
    }
},
}
</script>

<style lang="scss" scoped>
</style>