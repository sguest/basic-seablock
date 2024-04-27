let hiddenItems = [
    'burner-mining-drill',
    'electric-mining-drill',
    'pumpjack',
    'basic-oil-processing',
    'advanced-oil-processing',
];

for(let itemName of hiddenItems) {
    let item = data.raw.item[itemName];
    if(item) {
        item.flags ||= [];
        table.insert(item.flags, 'hidden');
    }
    let recipe = data.raw.recipe[itemName];
    recipe.enabled = false;
}