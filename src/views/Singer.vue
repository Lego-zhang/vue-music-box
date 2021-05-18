<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <index-list
      :data="singers"
      @select="selectSinger"
    ></index-list>
    <router-view :singer="selectedSinger"></router-view>

    <router-view v-slot="{Component}">
      <transition
        appear
        name="slide"
      >
        <component
          :is="Component"
          :singer="selectedSinger"
        />
      </transition>
    </router-view>

  </div>
</template>

<script>
import { getSigerList } from '../../service/siger'
import IndexList from '@/components/base/index-list/index-list.vue'

import storage from 'good-storage'
import { SINGER_KEY } from '../../src/assets/js/constant'

export default {
  components: { IndexList },
  props: {},
  data () {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  watch: {},
  computed: {},
  methods: {
    selectSinger (singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    cacheSinger (singer) {
      storage.session.set(SINGER_KEY, singer)
    }
  },
  async created () {
    const result = await getSigerList()
    console.log(result)
    this.singers = result.singers
  },
  mounted () { }
}
</script>
<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
