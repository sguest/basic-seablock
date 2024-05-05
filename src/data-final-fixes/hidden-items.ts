import { settingKeys } from '../setting-keys';

let hiddenItems: string[] = [];

if(settings.startup[settingKeys.disableMiningDrills].value) {
    table.insert(hiddenItems, 'burner-mining-drill');
    table.insert(hiddenItems, 'electric-mining-drill');
}

if(settings.startup[settingKeys.disablePumpjacks].value) {
    table.insert(hiddenItems, 'pumpjack');
}

if(settings.startup[settingKeys.disableCrudeOil].value) {
    table.insert(hiddenItems, 'basic-oil-processing');
    table.insert(hiddenItems, 'advanced-oil-processing');
    table.insert(hiddenItems, 'crude-oil');
    table.insert(hiddenItems, 'fill-crude-oil-barrel');
    table.insert(hiddenItems, 'empty-crude-oil-barrel');
}

for(let itemName of hiddenItems) {
    let item = data.raw.item[itemName];
    if(item) {
        item.flags ||= [];
        table.insert(item.flags, 'hidden');
    }
    let fluid = data.raw.fluid[itemName];
    if(fluid) {
        fluid.hidden = true;
    }
    let recipe = data.raw.recipe[itemName];
    if(recipe) {
        recipe.enabled = false;
        recipe.hidden = true;
        if(recipe.normal) {
            recipe.normal.enabled = false;
            recipe.normal.hidden = true;
        }
        if(recipe.expensive) {
            recipe.expensive.enabled = false;
            recipe.expensive.hidden = true;
        }
    }
}