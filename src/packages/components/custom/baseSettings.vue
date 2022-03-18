<template>
  <div class="form-container">
    <el-form label-position='left' label-width="150px">
      <el-form-item v-for="(obj, index) in ordinateObj" :key="index" :label="obj.label+':'">
        <component class="flex-row-center" :is="'Y'+obj.type" :value="form[obj.prop]" :dicData="obj.dicData"></component>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'baseSettings',
  data() {
    return {
      ordinateObj: [{
        label: '画布大小',
        type: 'Canvas',
        prop: 'canvas'
      },
      {
        label: '背景颜色',
        type: 'ColorPicker',
        prop: 'backgroundColor'
      },
      {
        label: '显示方式',
        type: 'radio',
        prop: 'displayStyle'
      }, {
        label: '边距',
        type: 'paddingStyle',
        prop: 'paddingStyle'
      },{
        label: '初始化动画',
        type: 'radio',
        prop: 'initAnimate',
        dicData: [{
          label: '是',
          value: true
        }, {
          label: '否',
          value: false
        }]
      },{
        label: '防止X轴标签溢出',
        type: 'radio',
        prop: 'overflowX',
        dicData: [{
          label: '是',
          value: true
        }, {
          label: '否',
          value: false
        }]
      },{
        label: '防止Y轴标签溢出',
        type: 'radio',
        prop: 'overflowY',
        dicData: [{
          label: '是',
          value: true
        }, {
          label: '否',
          value: false
        }]
      }],
      form: {}
    }
},
}
</script>

<style lang="scss" scoped>
</style>