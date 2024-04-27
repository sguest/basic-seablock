function techRemoveRecipe(techName: string, recipeName: string) {
    const technology = data.raw.technology[techName];

    for(const [index, effect] of pairs(technology.effects)) {
        const effectModifier = effect as prototype.Modifier;
        if(effectModifier.type === 'unlock-recipe' && effectModifier.recipe === recipeName) {
            table.remove(technology.effects, index as number);
        }
    }
}

function techAddRecipe(techName: string, recipeName: string) {
    const technology = data.raw.technology[techName];

    table.insert(technology.effects, { type: 'unlock-recipe', recipe: recipeName })
}

techRemoveRecipe('bob-greenhouse', 'bob-seedling');
techRemoveRecipe('bob-greenhouse', 'bob-basic-greenhouse-cycle');
techRemoveRecipe('oil-processing', 'basic-oil-processing');
techRemoveRecipe('oil-processing', 'pumpjack');
techRemoveRecipe('advanced-oil-processing', 'advanced-oil-processing');

techAddRecipe('uranium-processing', 'uranium-from-sediment');
techAddRecipe('coal-liquefaction', 'crude-coal-liquefaction');