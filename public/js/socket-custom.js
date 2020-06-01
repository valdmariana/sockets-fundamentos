var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor')
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Mariana',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta server: ', resp)
});

//escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});