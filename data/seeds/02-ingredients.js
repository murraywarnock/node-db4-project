exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: "Steak" }, 
    { ingredient_name: "Ramen" }, 
    { ingredient_name: "Potato" }, 
    { ingredient_name: "Water" },
    { ingredient_name: "Flavor Packet" },
    { ingredient_name: "Salt" },
    { ingredient_name: "Egg" },
    { ingredient_name: "Butter" }
  ]);
};
