import axiosApi from './axios'
import { URL } from './config'

// 歌手列表
export function getSingerList() {
  return axiosApi(URL.singerlist)
}

// 歌手描述
export function getSingerDesc(id) {
  return axiosApi(URL.singerdesc, id)
}