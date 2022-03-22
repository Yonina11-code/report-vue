<template>
  <div>
    <el-radio-group v-model="cloneValue">
      <el-radio :label="dic.value" v-for="(dic, index) in dicData" :key="index" border>
        {{dic.label}}
      </el-radio>
    </el-radio-group>
  </div>
</template>
<script>
import formMixins from '../../mixins/form.js'
export default {
  name: 'Yradio',
  mixins: [formMixins],
  props: {
    value: {
      type: [Number, String]
    },
    dicData: {
      type: [Array, Object]
    }
  },
  created () {
    console.log('radio', this.value, this.dicData)
  },
  data () {
    return {
      radio: ''
    }
  },
}
</script>

<style lang="scss" scoped>
</style>