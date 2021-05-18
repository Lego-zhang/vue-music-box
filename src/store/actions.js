import { PLAY_MODE } from '../assets/js/constant'

export function selectPlay ({ commit, state }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sqeuence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlaylist', list)
  commit('setCurrentIndex', index)
}
