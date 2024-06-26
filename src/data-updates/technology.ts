import { settingKeys } from '../setting-keys';

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

if(settings.startup[settingKeys.disablePumpjacks].value) {
    techRemoveRecipe('oil-processing', 'pumpjack');
}

if(settings.startup[settingKeys.disableCrudeOil].value) {
    techRemoveRecipe('oil-processing', 'basic-oil-processing');
    techRemoveRecipe('advanced-oil-processing', 'advanced-oil-processing');
    techRemoveRecipe('fluid-handling', 'fill-crude-oil-barrel');
    techRemoveRecipe('fluid-handling', 'empty-crude-oil-barrel');
}

techAddRecipe('uranium-processing', 'uranium-from-sediment');
techAddRecipe('coal-liquefaction', 'crude-coal-liquefaction');