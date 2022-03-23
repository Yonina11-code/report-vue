<template>
  <div>
    <el-input v-model="cloneValue" placeholder="请输入内容"></el-input>
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
}
</script>

<style lang="scss" scoped>
</style>