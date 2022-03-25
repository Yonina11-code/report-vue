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
      this.$emit('saveValue', val)
    }
  }
}