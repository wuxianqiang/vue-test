<template>
  <div>
    <div @click="handleClick">
      点击
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  methods: {
    handleClick () {
      this.$emit('selectItem', '6')
    }
  }
}
</script>