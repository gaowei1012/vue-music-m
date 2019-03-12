import originJsonp from 'jsonp'

// export default function jsonp(url, data, option) {
//   url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

//   return new Promise((resolve, reject) => {
//     originJsonp(url, option, (err, data) => {
//       if (!err) {
//         resolve(data)
//       } else {
//         reject(err)
//       }
//     })
//   })
// }

let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url, data), option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

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


// export function param(data) {
//   let url = ''
//   for (var k in data) {
//     let value = data[k] !== undefined ? data[k] : ''
//     url += '&' + k + '=' + encodeURIComponent(value)
//   }
//   return url ? url.substring(1) : ''
// }

export default jsonp
