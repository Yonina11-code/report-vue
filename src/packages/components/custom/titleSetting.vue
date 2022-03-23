<template>
  <div class="form-container">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(obj, index) in options" :key="index" :label="obj.label">
        <!-- <el-divider content-position="center">{{obj.label}}</el-divider> -->
          <div v-if="obj.objects.length">
            <el-form label-position='left' label-width="150px">
              <el-form-item v-for="(subObj, subIndex) in obj.objects" :key="subIndex" :label="subObj.label+':'">
                <component :is="'Y'+subObj.type" :options="subObj" @saveValue="(val) => handleSaveValue(obj,subObj, val)"></component>
              </el-form-item>
            </el-form>
          </div>
          <component v-else class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :dicData="obj.dicData" @saveValue="(val) => handleSaveValue(obj, val)"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'title',
  data() {
    return {
      activeNames: 1,
      options: [
        {
          label: '主标题',
          prop: 'title',
          objects: [
            {
              label: '主标题名称',
              prop: 'text',
              type: 'input'
            },
            {
              label: '主标题文本链接',
              prop: 'link',
              type: 'input'
            },
            // {
            //   label: '主标题文字风格',
            //   prop: 'textStyle',
            //   type: 'collapse',
            //   objects: [
                {
                  label: '主标题文字字体粗细',
                  prop: 'textStyle.fontStyle',
                  type: 'input'
                },
                {
                  label: '主标题文字字体大小',
                  prop: 'textStyle.fontSize',
                  type: 'input'
                },
                {
                  label: '行高',
                  prop: 'textStyle.lineHeight',
                  type: 'input'
                }
            //   ]
            // }
          ]
        }, {
          label: '副标题',
          prop: 'title',
          objects: [
            {
              label: '副标题名称',
              prop: 'subtext',
              type: 'input'
            },
            {
              label: '副标题文本链接',
              prop: 'sublink',
              type: 'input'
            },
            {
              label: '副标题文字字体粗细',
              prop: 'subtextStyle.fontStyle',
              type: 'input'
            },
            {
              label: '副标题文字字体大小',
              prop: 'subtextStyle.fontSize',
              type: 'input'
            },
            {
              label: '行高',
              prop: 'subtextStyle.lineHeight',
              type: 'input'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSaveValue (obj, subObj, val) {
      const propTemp = subObj.prop.split('.')
      let tempObj = {}
      tempObj[obj.prop] = {}
      if (propTemp.length === 2) {
        tempObj[obj.prop][propTemp[0]] = {}
        tempObj[obj.prop][propTemp[0]][propTemp[1]] = val
      } else {
        tempObj[obj.prop][propTemp[0]] = val
      }
      console.log('handleSaveValue', val, tempObj)
      this.$emit('setOptions', tempObj)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>