exports.up = function(knex) {
    return knex.schema.createTable('fruits', (tbl) => {
        tbl.increments();
        tbl.string('name', 128).unique().notNullable();
        tbl.decimal('avgWeightOz');
        tbl.boolean('delicious');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits');
  };