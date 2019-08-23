const db = require("./data/db-Config");
const router = require("./Router/userRouter");
const server = require("./server");
const request = require("supertest");

describe("GET requests", () => {
  it("get server.js", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("get router.js", () => {
    return request(server)
      .get("/api")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("get all users through router", () => {
    return request(server)
      .get("/api/users")
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.type).toMatch(/json/)
      });
  });
});

describe.skip("POST requests", ()=>{
    beforeEach(async()=>{
        await db("users").truncate()
    })
    it("succcessful post to users", ()=>{
        return request(server)
        .post("/api/users")
        .send({username: "Gabba", password: "Test"})
        .then(res=>{
            expect(res.status).toBe(200)
            expect(res.type).toMatch(/json/)
            expect(res.body).toMatchObject({username: "Gabba", password: "Test"})
        })
    })
    it("unsuccessful post to users", ()=>{
        return request(server)
        .post("/api/users")
        .send({username: "Gabba"})
        .then(res=>{
            expect(res.status).toBe(500)
            expect(res.type).toMatch(/json/)
            expect(res.body).toMatchObject({error: "bad request"})
        })
    })
})

// Only runs successfully if: 
// 1) Post is skipped - beforeEach.truncate() wipes the database
// 2) npx knex seed:run - the delete request goes thru, user 
// 5 is deleted after the first test run
describe("DELETE request", ()=>{
    it("successful delete user by ID", ()=>{
        return request(server)
        .delete("/api/users/5")
        .then(res=>{
            expect(res.status).toBe(201)
            expect(res.body).toBe(1)
        })
    })
    it("unsuccessful deletes user by ID", ()=>{
        return request(server)
        .delete("/api/users/999999")
        .then(res=>{
            expect(res.status).toBe(201)
            expect(res.body).toBe(0)
        })
    })
})
