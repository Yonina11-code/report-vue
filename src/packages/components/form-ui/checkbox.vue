<template>
  <div>
    <el-checkbox-group class="flex-row-left checkboxs" v-model="cloneValues">
      <el-checkbox :label="dic.value" v-for="(dic, index) in dicData" :key="index" border>
        {{dic.label}}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
import formMixins from '../../mixins/form.js'
export default {
  name: 'Ycheckbox',
  mixins: [formMixins],
  props: {
    value: {
      type: [Number, String, Array]
    },
    dicData: {
      type: [Array, Object]
    }
  },
  data () {
    return {
      radio: '',
      cloneValues: []
    }
  },
  watch: {
    value (val) {
      this.cloneValues = val || []
    },
    cloneValues (val) {
      this.$emit('saveValue', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkboxs {
  height: 100px;
}
/deep/ .el-checkbox.is-bordered+.el-checkbox.is-bordered {
  margin-left: 0px;
}
</style>