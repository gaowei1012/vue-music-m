import axios from 'axios'

/**
 *  axios http response
 * @param {*} url 
 * @param {*} data 
 */
function axiosApi(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'GET',
            params: data
        }).then((res) => {
            if (res.status === 200) {
                resolve(res)
            } else {
                reject(res.message)
            }
        })
    })
} 

/**
 * parmas 
 * @param {string} url url
 * @param {object} data data
 */
//let url = 'http://localhost://3030/common/list?name&age'
/*
function buildUrl (url, data) {
    let parmas = []
    for (var k in data) {
        parmas.push(`${k}=${data[k]}`)
    }
    let param = parmas.join('&')
    if (url.indexOf('?') === -1) {
        url += "?" + param
    } else {
        url += '&' + param
    }
    return url
}
*/

export default axiosApi

