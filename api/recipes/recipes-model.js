// select 
//     r.recipe_id,
//     r.recipe_title,
//     r.created_date,
//     s.step_id,
//     s.step_number,
//     s.instructions,
//     i.ingredient_id,
//     i.ingredient_name,
//     i.amount
// from recipes r
// join steps s 
//     on s.recipe_id = r.recipe_id
// left join step_ingredient si
//     on si.step_id = s.step_id
// left join ingredients i
//     on si.ingredient_id = i.ingredient_id
// order by r.recipe_id, s.step_number

function getRecipeById(recipeId) {
    return Promise.resolve('awesome')
}

module.exports = { getRecipeById };