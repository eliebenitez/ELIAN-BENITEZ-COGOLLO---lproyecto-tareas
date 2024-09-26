// Ejemplo simple usando Socket.IO en el servidor
io.on('connection', (socket) => {
  socket.on('user-online', (userId) => {
    // Actualizar estado a "en línea"
    io.emit('update-friend-status', { id: userId, online: true });
  });

  socket.on('disconnect', () => {
    // Actualizar estado a "desconectado"
    io.emit('update-friend-status', { id: socket.userId, online: false });
  });
});
