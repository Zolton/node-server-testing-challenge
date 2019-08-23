const express = require("express")
const userRouter = require("./Router/userRouter")
const server = express()
server.use(express.json())
server.use("/api", userRouter)
server.get("/", (req, res)=>{
    res.status(200).json({Hello: "from server.js"})
})
module.exports = server