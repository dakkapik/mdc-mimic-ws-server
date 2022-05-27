require('dotenv').config()

const express = require('express')
const { createServer } = require("http")
const { Server } = require("socket.io")
const path = require("path")
const ip = require("./ipGet")()
const port = process.env.PORT || 5000

const app = express()
const server = createServer(app)
const io = new Server(server, {
   cors: {
     origin: [ "http://" + ip + ":" + port ],
   //   allowedHeaders: ["my-custom-header"],
   //   credentials: true
   }
})

require("./socket")(io)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{

   res.sendFile(path.join(__dirname, "index.html"))

})


app.listen(port , ()=> console.log('> Server is up and running on : http://' + ip + ":" + port))