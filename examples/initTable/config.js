export default  [{
    label: '商户编号',
    labelWidth: 200,
    span: 16,
    rules: [{
      required: true,
      message: '请输入商户编号'
    }],
    row: true,
    search: true,
    prop: 'commercialNum',
  },
  {
    label: '商户名称',
    labelWidth: 200,
    span: 16,
    row: true,
    display: false,
    search: true,
    prop: 'commercialName',
  },
  {
    label: '商户联系方式',
    type: 'select',
    labelWidth: 200,
    span: 16,
    row: true,
    hide: true,
    rules: [{
      required: true,
      message: '请输入商户联系方式'
    }],
    prop: 'commercialPhone',
  },
  {
    label: '风险等级',
    labelWidth: 200,
    span: 12,
    display: false,
    prop: 'riskType',
    type: 'select',
    dicUrl: 'testapi/dict/type/riskType'
  }, {
    label: '二级分行',
    type: 'select',
    dicUrl: `/getapi/meta/branch/list`,
    labelWidth: 200,
    span: 12,
    display: false,
    prop: 'twoBranch'
  }, {
    label: '合作机构',
    labelWidth: 200,
    span: 12,
    type: 'select',
    dicUrl: 'getapi/organization/list/valid',
    props: {
      label: "name",
      value: "id"
    },
    search: true,
    display: false,
    prop: 'orgId'
  }, {
    label: '异常情况',
    type: 'select',
    dicUrl: 'testapi/dict/type/commercialWarningType',
    labelWidth: 200,
    span: 12,
    display: false,
    search: true,
    slot: true,
    prop: 'warningList'
  }
]