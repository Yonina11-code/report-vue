<template>
  <div class="form-container">
    <slot name="before"></slot>
    <el-form label-position='left' :label-width="(options.width || '250') + 'px'">
      <el-form-item v-for="(obj, index) in options.column" :key="index" :label="obj.label+':'" :label-width="obj.labelWith ? obj.labelWith + 'px' : ''">
        <component class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :options="obj" :dicData="obj.dicData" @saveValue="(val) => handleSaveValue(obj, val)"></component>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="handleUse">使用该自定义配置项</el-button>
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
      form: {},
      tempObj: {}
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
      console.log('handleSaveValue', obj, val)
      if (obj.prop === 'customOptions') {
        this.tempObj[obj.prop] = eval(`[${val}]`)[0]
      } else {
        this.tempObj[obj.prop] = val
      }

    },
    handleUse () {
      console.log('this.tempObj', this.tempObj)
      this.$emit('setOptions', this.tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>