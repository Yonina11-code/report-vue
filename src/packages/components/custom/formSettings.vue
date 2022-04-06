<template>
  <div class="form-container">
    <slot name="before"></slot>
    <el-form label-position='left' :label-width="(options.width || '250') + 'px'">
      <el-form-item v-for="(obj, index) in options.column" :key="index" :label="obj.label+':'" :label-width="obj.labelWith ? obj.labelWith + 'px' : ''">
        <component class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :options="obj" :dicData="obj.dicData" @saveValue="(val) => handleSaveValue(obj, val)"></component>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'formSettings',
  props: {
    options: [Array, Object]
  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    value: {
      handler (val) {
        console.log('value', val, this.options)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleSaveValue (obj, val) {
      const propTemp = obj.prop.split('.')
      let tempObj = {}
      if (propTemp.length === 2) {
         // 要特殊处理
        if (this.options.prop) {
          tempObj[this.options.prop] = {}
          tempObj[this.options.prop][propTemp[0]] = {}
          tempObj[this.options.prop][propTemp[0]][propTemp[1]] = val
        } else {
          // 顶层属性，直接放
          tempObj[propTemp[0]] = {}
          tempObj[propTemp[0]][propTemp[1]] = val
        }
      } else {
        if (this.options.prop) {
          tempObj[this.options.prop] = {}
          tempObj[this.options.prop][obj.prop] = val
        } else {
          // 顶层属性，直接放
          tempObj[obj.prop] = val
        }
      }
      this.$emit('setOptions', tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>