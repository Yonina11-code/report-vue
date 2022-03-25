export default {
  mapData: 'mapData',
  scatterData: 'scatterData',
  // visualMap: [{
  //   min: 0,
  //   max: 2500,
  //   left: 'left',
  //   top: 'bottom',
  //   text: ['高', '低'], // 文本，默认为数值文本
  //   calculable: true
  // }],
  datasetIndex: 0,
  geo: {
    map: 'china', // 要显示的地图
    roam: true,
    zomm: 2,
    itemStyle: {
    areaColor: 'rgba(0,29,132,0.8)', // 区域颜色
      borderColor: '#02c0ff' // 边框颜色
    },
    emphasis:{ // 鼠标滑入的样式
      itemStyle: {
        shadowColor: '#000', // 阴影颜色
        shadowOffsetY: 30, // 偏移量
        shadowBlur: 30 // 模糊量
      }
    }
  },
  series: [
    {
      id: 1,
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: (param) => { // 散点大小
        return param[2]/5
      },
      // 鼠标移入时的高亮
      emphasis: {
        itemStyle: { // 选中item的样子
          shadowColor: '#fff',
          borderColor: 'yellow'  // 描边颜色
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
      }
    }
  ]

}
