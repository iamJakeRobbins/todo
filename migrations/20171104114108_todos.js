title text
descrption text
priority integer


exports.up = function(knex, Promise) {
	return
	knex.schema.createTable('todos', (table =>{
		table.increments().primary
		table.text('title').notNullable();
		table.text('description')
		table.integer('priority')
	}))

};

exports.down = function(knex, Promise) {
	return
	knex.schema.dropTable('todos')

};
