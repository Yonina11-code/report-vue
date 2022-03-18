<template>
  <div>
    <el-color-picker v-model="value"></el-color-picker>
  </div>
</template>
<script>
export default {
  name: 'YColorPicker',
  props: {
    value: [String]
  },
  data() {
    return {
    }
  },
  watch: {
    value (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>