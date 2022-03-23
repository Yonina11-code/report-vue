export default {
  data: () => {
    return {
      cloneValue: ''
    }
  },
  watch: {
    value (val) {
      this.cloneValue = val
    },
    cloneValue (val) {
      console.log('cloneValue', val)
      this.$emit('saveValue', val)
    }
  }
}