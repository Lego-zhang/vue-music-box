<template>
  <div class="singer-detail">
    <muisc-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></muisc-list>
  </div>
</template>

<script>
import { getSingerDetail } from '../../service/siger'
import { processSongs } from '../../service/songs'
import MuiscList from '../components/music-list/muisc-list.vue'

export default {
  name: 'SingerDetail',
  components: { MuiscList },
  props: {
    singer: Object
  },
  data () {
    return {
      songs: [],
      loading: true
    }
  },
  watch: {},
  computed: {
    pic () {
      return this.singer && this.singer.pic
    },
    title () {
      return this.singer && this.singer.name
    }
  },
  methods: {},
  async created () {
    const result = await getSingerDetail(this.singer)
    this.songs = await processSongs(result.songs)
    this.loading = false
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
