<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <div v-if="options.objects.length">
          <el-form label-position='left' label-width="150px">
            <el-form-item v-for="(subObj, subIndex) in options.objects" :key="subIndex" :label="subObj.label+':'">
              <component :is="'Y'+subObj.type" :options="subObj"></component>
            </el-form-item>
          </el-form>
        </div>
        <component v-else class="flex-row-center" :is="'Y'+options.type" :value="form[options.prop]" :dicData="options.dicData"></component>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'Ycollapse',
  props: {
    options: Object,
    form: Object
  },
  data() {
    return {
      cloneForm: {},
      activeNames: ['1']
    }
},
}
</script>

<style lang="scss" scoped>
/deep/.el-form-item {
  margin-bottom: 10px;
}
</style>