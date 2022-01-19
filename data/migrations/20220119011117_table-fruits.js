
exports.up = async function(knex) {
    // build fruits table
    await knex.schema.createTable('fruits', table =>{
    // shortcut for create col 'id' which is primary key with auto-inc integers
    // table.increments() // pass the column name if you want different than 'id'
    table.increments('fruit_id') // pass the column name if you want different than 'id'
    })
};

exports.down = async function(knex) {
    // destroy fruits table
    await knex.schema.dropTableIfExists('fruits')
};
