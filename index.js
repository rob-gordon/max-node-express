var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

io.on('connection', function(socket) {
  io.emit('message', 'You connected!')

  socket.on('message', function(msg) {
    console.log(`Message: ${message}`)
  })
})

http.listen(port, function() {
  console.log('listening on *:' + port)
})
