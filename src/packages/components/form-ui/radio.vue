<template>
  <div>
    <el-radio-group class="flex-row-left checkboxs" v-model="cloneValue">
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
  data () {
    return {
      radio: ''
    }
  },
}
</script>

<style lang="scss" scoped>
/deep/.el-radio.is-bordered+.el-radio.is-bordered {
  margin-left: 0px;
}
</style>