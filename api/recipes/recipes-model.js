// select 
//     r.recipe_id,
//     r.recipe_title,
//     r.created_date,
//     s.step_id,
//     s.step_number,
//     s.instructions,
//     i.ingredient_id,
//     i.ingredient_name,
//     si.amount
// from recipes r
// join steps s 
//     on s.recipe_id = r.recipe_id
// left join step_ingredient si
//     on si.step_id = s.step_id
// left join ingredients i
//     on si.ingredient_id = i.ingredient_id
// order by r.recipe_id, s.step_number

const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')

        .where('s.recipe_id', recipe_id)
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredient as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .orderBy('s.step_number')
        .select(
            'r.recipe_id',
            'r.recipe_title',
            'r.created_date',
            's.step_id',
            's.step_number',
            's.instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.amount',
            )
            
        const recipeObj = {
            recipe_id: recipeRows[0].recipe_id,
            recipe_name: recipeRows[0].recipe_title,
            created_at: recipeRows[0].created_date,
            steps: []
        }
        recipeRows.forEach(row => {
            if(row.step_id) {
                recipeObj.steps.push({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.instructions,
                    ingredients: []
                })
                // if(row.ingredient_id) {
                //     recipeObj.steps.ingredients.push({
                //         ingredient_id: row.ingredient_id
                //     })
                // }
            }

        }) 

    return recipeObj;

}

module.exports = { getRecipeById };