const express = require("express")
const router = express.Router()
const user = require("./routerHelpers")

router.get("/", (req, res)=>{
    res.status(200).json({Hello: "from userRouter.js"})
})

router.get("/users", (req, res)=>{
    user.getAll().then(post=>{
        res.status(200).json(post)
    })
    .catch(error=>{
        res.status(500).json(error)
    })
    
})

module.exports = router