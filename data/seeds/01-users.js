
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Frodo", password: "OneRing"},
        {username: "Gandalf", password: "WizrdzRule"},
        {username: "Bilbo", password: "HobbitzRule"},
        {username: "Frodo2", password: "OneRing"},
        {username: "Gandalf2", password: "WizrdzRule"},
        {username: "Bilbo2", password: "HobbitzRule"},
        {username: "Frodo3", password: "OneRing"},
        {username: "Gandalf43", password: "WizrdzRule"},
        {username: "Bilbo3", password: "HobbitzRule"}
      ]);
    });
};
