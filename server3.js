const { createServer } = require( "http");
const { Server } = require ("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
      origin: [ "http://http://192.168.0.10:3000" , "http://127.0.0.1:5500"],
    //   allowedHeaders: ["my-custom-header"],
    //   credentials: true
    }
 });

io.on("connection", (socket) => {
    socket.on("purpose", (purpose) => {
        console.log("> ", purpose)
    })

    socket.on("slider-pos", (pos) => {
        io.emit("pos", pos)
    })

});


httpServer.listen(3000);