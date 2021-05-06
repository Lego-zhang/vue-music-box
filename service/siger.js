import { get } from './base'

export function getSigerList () {
  return get('/api/getSingerList')
}

export function getSingerDetail (singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}
