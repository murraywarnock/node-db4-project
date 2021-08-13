exports.seed = function(knex, Promise) {
    return knex('step_ingredient').insert([
      // species_id must match valid species
        { amount: "1 block",
        step_id: 1,
        ingredient_id: 2},

        { amount: "2 cups",
        step_id: 1,
        ingredient_id: 4},

        { amount: "1 packet",
        step_id: 2,
        ingredient_id: 5},

        { amount: "1",
        step_id: 3,
        ingredient_id: 7},

        { amount: "1",
        step_id: 5,
        ingredient_id: 1},

        { amount: "moderate shake",
        step_id: 6,
        ingredient_id: 6},

        { amount: "1",
        step_id: 8,
        ingredient_id: 3},

        { amount: "light shake",
        step_id: 9,
        ingredient_id: 6},

        { amount: "1 pad",
        step_id: 9,
        ingredient_id: 8},
    ]);
  };
  