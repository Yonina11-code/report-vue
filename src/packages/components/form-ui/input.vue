<template>
  <div>
    <el-input v-model="value" placeholder="请输入内容"></el-input>
  </div>
</template>
<script>
export default {
  name: 'Yinput',
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