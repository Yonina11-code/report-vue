<template>
  <div class="form-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(obj, index) in options" :key="index" :title="obj.label" :name="index">
        <div v-if="obj.objects.length">
          <el-form label-position='left' label-width="150px">
            <el-form-item v-for="(subObj, subIndex) in obj.objects" :key="subIndex" :label="subObj.label+':'">
              <component :is="'Y'+subObj.type" :options="subObj"></component>
            </el-form-item>
          </el-form>
        </div>
        <component v-else class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :dicData="obj.dicData"></component>
      </el-collapse-item>
    </el-collapse>
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
          prop: 'main',
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
            {
              label: '主标题文字风格',
              prop: 'textStyle',
              type: 'collapse',
              objects: [
                {
                  label: '主标题文字字体粗细',
                  prop: 'fontStyle',
                  type: 'input'
                },
                {
                  label: '主标题文字字体大小',
                  prop: 'fontSize',
                  type: 'input'
                },
                {
                  label: '行高',
                  prop: 'lineHeight',
                  type: 'input'
                }
              ]
            }
          ]
        }, {
          label: '副标题',
          prop: 'sub',
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
              label: '副标题文字风格',
              type: 'collapse',
              objects: [
                {
                  label: '副标题文字字体粗细',
                  prop: 'fontStyle',
                  type: 'input'
                },
                {
                  label: '副标题文字字体大小',
                  prop: 'fontSize',
                  type: 'input'
                },
                {
                  label: '行高',
                  prop: 'lineHeight',
                  type: 'input'
                }
              ]
            }
          ]
        }
      ]
    }
},
}
</script>

<style lang="scss" scoped>
</style>