<template>
  <div v-if="options">
    <el-input v-model="cloneValue" :type="options.inputType || 'input'" :rows="options.rows" placeholder="请输入内容"></el-input>
  </div>
</template>
<script>
import formMixins from '../../mixins/form.js'
export default {
  name: 'Yinput',
  mixins: [formMixins],
  props: {
    options: Object,
    form: Object
  },
  data() {
    return {
      value: ''
    }
  },
  created () {
    console.log('input', this.form)
  }
}
</script>

<style lang="scss" scoped>
</style>