<template>
  <div>
    <child-component @selectItem="selectItem">
    </child-component>
    <div class="count">
      {{ value }}
    </div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  components: {
    ChildComponent
  },

  data () {
    return {
      value: '0'
    }
  },

  methods: {
    selectItem (value) {
      this.value = value
    }
  }
}
</script>