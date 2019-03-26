<template>
  <div>
    <button @click="handleClick">
      点击
    </button>
    <div class="count">
      {{ count }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    handleClick () {
      this.count++
    }
  }
}
</script>

