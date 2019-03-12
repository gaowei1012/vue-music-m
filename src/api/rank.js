import axiosApi from './axios'
import { URL } from './config'

// 排行榜
export function getRank() {
  return axiosApi(URL.ranklist)
}
