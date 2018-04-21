var express = require('express')
var compression = require('compression')
var axios = require('axios')

var port = process.env.PORT || 9000

var app = express()
var apiRoutes = express.Router()

apiRoutes.get('/api/getData', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var url = 'http://api.steampowered.com/IDOTA2Match_570/GetLeagueListing/v1?key=6D7A52CD3D21C352CE3AC33A2DCF1A78'
    axios.get(url).then(function (response) {
        res.send(response.data)
    })
})
app.use('/api', apiRoutes)

app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})