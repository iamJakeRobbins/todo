
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1,
					title: "make a seed",
					priority: 5,
				}
				{ id: 2,
					title: "fix my leg",
					priority: 1,
				}
				{id: 3,
					title: "walk the bubbs",
					priority: 3,
				}
      ]);
    });
};
