exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { instructions: "Drop 1 block ramen in 2 cups water for 3 minutes",
        recipe_id: 1,
        step_number: 1},

        { instructions: "Add ramen flavor packet and mix",
        recipe_id: 1,
        step_number: 2},

        { instructions: "Crack an egg into the pot and let sit 1 minute",
        recipe_id: 1,
        step_number: 3},
// 4
        { instructions: "Heat large skillet till smoking",
        recipe_id: 2,
        step_number: 2},
// 5
        { instructions: "Add steak; cook 4 minutes per side",
        recipe_id: 2,
        step_number: 3},
// 6
        { instructions: "Season steak with salt and pepper",
        recipe_id: 2,
        step_number: 1},
// 7
        { instructions: "Heat oven to 375",
        recipe_id: 3,
        step_number: 1},
// 8
        { instructions: "Cook potato 1 hour",
        recipe_id: 3,
        step_number: 2},
// 9
        { instructions: "Serve with salt and butter",
        recipe_id: 3,
        step_number: 3},
    ]);
  };
  