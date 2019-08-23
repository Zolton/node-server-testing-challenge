const express = require("express");
const router = express.Router();
const func = require("./routerHelpers");

// Base URL = /api

router.get("/", (req, res) => {
  res.status(200).json({ Hello: "from userRouter.js" });
});

router.get("/users", (req, res) => {
  func
    .getAll()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/users", (req, res)=>{
    const user = req.body
    func.addNewUser(user).then(newU=>{
        res.status(200).json(user)
    })
    
    .catch(error=>{
        res.status(500).json({error: "bad request"})
    })
})

router.delete("/users/:id", (req, res)=>{
    const id = req.params.id
    func.deleteUser(id).then(gone=>{
        res.status(201).json(gone)
    })
    .catch(error=>{
        res.status(500).json(error)
    })
})

module.exports = router;
