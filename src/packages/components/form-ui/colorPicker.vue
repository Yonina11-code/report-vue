<template>
  <div>
    <el-color-picker v-model="cloneValue" show-alpha></el-color-picker>
  </div>
</template>
<script>
import formMixins from '../../mixins/form.js'
export default {
  name: 'YColorPicker',
  mixins: [formMixins],
  props: {
    value: [String]
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>