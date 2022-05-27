const { io } = require("socket.io-client")
const fs = require("fs")

const socket = io ("http://192.168.0.210:5000")

socket.on("connect",() => {
    socket.emit("purpose", "reciever")
})

socket.on("pos", (pos) => {
    fs.writeFileSync("position.json", JSON.stringify(pos))
    console.log("current pos: ", pos)
})