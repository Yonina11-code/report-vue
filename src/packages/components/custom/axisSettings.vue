<template>
  <div class="form-container">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(tab, index) in options" :key="index" :label="tab.tabName">
        <el-form label-position='left' label-width="250px">
          <el-form-item v-for="(obj, objIndex) in tab.axisOptions" :key="objIndex" :label="obj.label+':'">
            <component class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :dicData="obj.dicData" @saveValue="(val) => handleSaveValue(tab, obj, val)"></component>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Yaxis',
  props: {
    options: [Array, Object],
  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    form: {
      handler (val) {
        console.log('val', val, this.options)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleSaveValue (tab, obj, val) {
      let tempObj = {}
      tempObj[tab.prop] = {}
      tempObj[tab.prop][obj.prop] = val
      this.$emit('setOptions', tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>