let hiddenItems = [
    'burner-mining-drill',
    'electric-mining-drill',
    'pumpjack',
    'basic-oil-processing',
    'advanced-oil-processing',
    'crude-oil',
    'fill-crude-oil-barrel',
    'empty-crude-oil-barrel',
];

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