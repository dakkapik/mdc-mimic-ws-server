const express = require('express')
const app = express()
require('dotenv').config()
const path = require("path")
const port = process.env.PORT || 5000

app.use(express.static('public'));

app.get('/' , (req , res)=>{

   res.sendFile(path.join(__dirname, "index.html"))

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))