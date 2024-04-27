function enableRecipe(name: string) {
    const recipe = data.raw.recipe[name];
    if(recipe.normal) {
        recipe.normal.enabled = true;
    }
    if(recipe.expensive) {
        recipe.expensive.enabled = true;
    }
}

enableRecipe('bob-seedling');
enableRecipe('bob-basic-greenhouse-cycle');