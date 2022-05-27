module.exports = (io) => {
    io.on("connection", (socket) => {
        socket.emit("purpose")

        socket.on("name", (name) => {
            console.log("THIS NAME", name)
        })
    })
}