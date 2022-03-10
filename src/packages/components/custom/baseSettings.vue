<template>
  <div class="form-container">
    <el-form>
      <el-form-item v-for="(obj, index) in ordinateObj" :key="index" :label="obj.label+':'">
        <component :is="obj.type" :value="obj.prop"></component>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import formUi from '../form-ui/index.js'
export default {
  name: 'baseSettings',
  components: { YCanvas : formUi.canvas, YColorPicker: formUi.colorPicker },
  data() {
    return {
      ordinateObj: [{
        label: '画布大小',
        type: 'YCanvas',
        prop: 'canvas'
      },
      {
        label: '背景颜色',
        type: 'YColorPicker',
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
      }]
    }
},
}
</script>

<style lang="scss" scoped>
.form-container {
  padding: 20px;
}
</style>