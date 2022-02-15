exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate();
  return knex('fruits').insert([
    {name: 'avocado', avgWeightOz: 1000, delicious: true},
    {name: 'apple', avgWeightOz: 1000, color: 'red'},
    {name: 'banana', avgWeightOz: 1, delicious: true, color: 'yellow'},
  ]);
};