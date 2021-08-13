exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_title: 'Ramen', created_date: "2021-07-27T07:45:00Z" },
      { recipe_title: 'Steak', created_date: "2021-08-27T07:45:00Z" },      
      { recipe_title: 'Baked Potato', created_date: "2021-07-27T07:45:00Z" },
    ]);
  };
  