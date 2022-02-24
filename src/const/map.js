export default {
  mapData: 'mapData',
  scatterData: 'scatterData',
  series: [
    {
      type: 'map',
      map: 'china',
      roam: true,
      // 鼠标移入时的高亮
      emphasis: {
        itemStyle: { // 选中item的样子
          areaColor: 'raba()',
          borderColor: ''  // 描边颜色
        },
        label: { // 选中的label样式
            color: 'blue'
        }
      }
    }
  ]

}