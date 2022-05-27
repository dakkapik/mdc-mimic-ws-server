module.exports = (io) => {
    io.on("connection", (socket) => {

        socket.on("purpose", (purpose) => {
            console.log("> ", purpose)
        })

        socket.on("canvas-pos", (pos) => {
            io.emit("pos", pos)
        })

    });
}