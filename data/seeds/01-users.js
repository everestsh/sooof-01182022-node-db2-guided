
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'diandra', website: 'www.diandra.com'},
        {username: 'dian', website: 'www.dian.com'},
        {username: 'amy'},
        {username: 'simon'},
      ]);
    });
};
