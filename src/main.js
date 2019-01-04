var socket = io()

// socket.emit('message', 'user connected')

socket.on('message', function(msg) {
  console.log(`Message: ${msg}`)
})
