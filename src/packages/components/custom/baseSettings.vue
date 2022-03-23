<template>
  <div class="form-container">
    <el-form label-position='left' label-width="150px">
      <el-form-item v-for="(obj, index) in ordinateObj" :key="index" :label="obj.label+':'">
        <component class="flex-row-center"
        :is="'Y'+obj.type"
        :value="form[obj.prop]"
        :dicData="obj.dicData"
        @saveValue="(val) => handleSaveValue(obj, val)"></component>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import baseSettingOptions from '../../const/settingsOption/baseSetting.js'
export default {
  name: 'baseSettings',
  data() {
    return {
      ordinateObj: baseSettingOptions,
      form: {}
    }
  },
  methods: {
    handleSaveValue (obj, val) {
      let tempObj = {}
      tempObj[obj.prop] = val
      console.log('handleSaveValue', obj, val)
      this.$emit('setOptions', tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>