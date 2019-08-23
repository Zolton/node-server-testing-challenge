const db = require("../data/db-Config");

module.exports = {
  getAll,
  addNewUser,
  deleteUser
};

function getAll() {
  return db("users");
}

function addNewUser(user) {
  return db("users").insert(user);
}

function deleteUser(id) {
    return db("users").where({id: id}).del()
}