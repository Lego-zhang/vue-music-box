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
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  emits: ['scroll'],
  setup (props, { emit }) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props, emit)
    return {
      rootRef,
      scroll
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
