// 1- truncate, not delete (there are libraries to help truncating)
// 2- do NOT try to insert the primary key col
exports.seed = function (knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'orange', avgWeightOz: 1.5, delicious: true, color: 'green' },
        { name: 'pear', avgWeightOz: 2.5, delicious: null, color: 'orange' },
        { name: 'grapes', avgWeightOz: 5, delicious: false, color: 'purple' },
      ]);
    });
};
