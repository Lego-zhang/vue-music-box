<template>
  <div class="singer-detail"></div>
</template>

<script>
import { getSingerDetail } from '../../service/siger'
import { processSongs } from '../../service/songs'

export default {
  name: 'SingerDetail',
  components: {},
  props: {
    singer: Object
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  async created () {
    const result = await getSingerDetail(this.singer)
    const songs = await processSongs(result.songs)
    console.log(songs)
  },
  mounted () { }
}
</script>
<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
