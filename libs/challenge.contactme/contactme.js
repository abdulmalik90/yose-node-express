var pong = function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send("nama = ALPHA , Kelompok = 1, ASAL = Universitas Gadjahmada");
};

module.exports = pong;