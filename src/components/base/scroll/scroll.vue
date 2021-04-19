<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from './use-scroll'
import { ref } from 'vue'
export default {
  name: 'scrolls',
  components: {},
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  setup (props) {
    const rootRef = ref(null)
    useScroll(rootRef, props)
    return {
      rootRef
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>
