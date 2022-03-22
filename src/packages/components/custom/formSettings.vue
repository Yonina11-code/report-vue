<template>
  <div class="form-container">
    <el-form label-position='left' label-width="250px">
      <el-form-item v-for="(obj, index) in options.column" :key="index" :label="obj.label+':'" :label-width="obj.labelWith">
        <component class="flex-row-center" :is="'Y'+obj.type" :value.sync="form[obj.prop]" :dicData="obj.dicData"></component>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'formSettings',
  props: {
    options: Array
  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    value: {
      handler (val) {
        console.log('value', val)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>