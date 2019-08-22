const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).json({Hello: "from userRouter.js"})
})

module.exports = router