var axios = require('axios')

export function getData() {
  var url = 'api/getData'
  return axios.get(url).then(function (res) {
    return Promise.resolve(res.data)
  })
}
