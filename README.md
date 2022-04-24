# vue-report
一个通过表格数据生成自己想要的图表

## 快速上手
``` javascript
npm install y-charts-report
```

#### 引入y-charts-report

在main.js中写入一下内容：
``` javascript
  import vue from 'vue'
  import yChartsReport from 'y-charts-report'
  import 'y-charts-report/lib/y-charts-report.css' // 引入y-charts-report的样式
  import * as echarts from 'echarts'
  Vue.prototype.$echarts = echarts // 将echarts绑定在原型链上
  Vue.use(yChartsReport)
```
  y-charts-report依赖echarts并且必须将echarts绑定到原型链上

源码地址： https://github.com/Yonina11-code/report-vue