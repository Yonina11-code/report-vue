<template>
  <div class="form-container">
    <el-form label-position='left' :label-width="options.width+'px' || '250px'">
      <el-form-item v-for="(obj, index) in options.column" :key="index" :label="obj.label+':'" :label-width="obj.labelWith+''">
        <component class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :dicData="obj.dicData" @saveValue="(val) => handleSaveValue(obj, val)"></component>
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
      let tempObj = {}
      if (this.options.prop) {
        tempObj[this.options.prop] = {}
        tempObj[this.options.prop][obj.prop] = val
      } else {
        tempObj[obj.prop] = val
      }
      this.$emit('setOptions', tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>