import axiosApi from './axios'
import { URL } from './config'

// banner
export function getBanner() {
    return axiosApi(URL.banner)
} 

// 热门歌单
export function getDiscList() {
    return axiosApi(URL.hotMusic)
}

// 歌单列表
export function getPlayList() {
    return axiosApi(URL.playlist)
}