const allowedProductivityRecipes = [
    'wood-to-coal',
    'sediment-from-water',
    'iron-from-sediment',
    'copper-from-sediment',
    'stone-from-sediment',
    'uranium-from-sediment',
];

for(const [index, module] of pairs(data.raw.module)) {
    const results = string.find(module.name, 'productivity');
    if(results[0] === 1) {
        for(let allowed of allowedProductivityRecipes) {
            table.insert(module.limitation, allowed);
        }
    }
}