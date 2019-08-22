const db = require("./data/db-Config")
const router = require("./Router/userRouter")
const server = require("./server")
const request = require("supertest")

describe("GET requests", ()=>{
    it("get server.js", ()=>{
        return request(server).get("/").then(res=>{
            expect(res.status).toBe(200)
        })
    })
    it("get router.js", ()=>{
        return request(router).get("/api").then(res=>{
            expect(res.status).toBe(200)
        })
    })

})