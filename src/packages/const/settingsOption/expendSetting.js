export default {
  width: 120,
  column:  [
    {
      label: '属性合并方式',
      type: 'radio',
      prop: 'iscover',
      dicData: [
        {
          label: '合并',
          value: 'merge'
        },
        {
          label: '覆盖(所有设置项不生效)',
          value: 'cover'
        }
      ]
    },{
      label: '自定义配置项',
      type: 'input',
      prop: 'customOptions',
      inputType: 'textarea',
      rows: 20
    }
  ]
}