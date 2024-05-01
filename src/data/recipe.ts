data.extend([
{
    type: 'recipe-category',
    name: 'seablock-electrolyzer',
},
{
    type: 'recipe-category',
    name: 'hand-crafting',
},
{
    type: 'recipe',
    name: 'wood-to-coal',
    main_product: '',
    icon: '__base__/graphics/icons/coal-3.png',
    subgroup: 'raw-resource',
    icon_size: 64,
    category: 'smelting',
    energy_required: 3.2,
    ingredients: [[ 'wood', 1 ]],
    enabled: true,
    result: 'coal',
    result_count: 4,
},
{
    type: 'recipe',
    name: 'seablock-electrolyzer',
    energy_required: 5,
    enabled: true,
    ingredients: [
        { type: 'item', name: 'electronic-circuit', amount: 5 },
        { type: 'item', name: 'iron-gear-wheel', amount: 5 },
        { type: 'item', name: 'pipe', amount: 5 },
        { type: 'item', name: 'iron-plate', amount: 5 },
    ],
    result: 'seablock-electrolyzer',
},
{
    type: 'recipe',
    name: 'sediment-from-water',
    category: 'seablock-electrolyzer',
    energy_required: 2,
    enabled: true,
    always_show_products: true,
    ingredients: [
        { type: 'fluid', name: 'water', amount: 50 },
    ],
    results: [
        { type: 'item', name: 'sediment', amount_min: 1, amount_max: 1 },
    ],
},
{
    type: 'recipe',
    name: 'iron-from-sediment',
    energy_required: 0.5,
    enabled: true,
    ingredients: [
        { type: 'item', name: 'sediment', amount: 2 },
    ],
    result: 'iron-ore'
},
{
    type: 'recipe',
    name: 'copper-from-sediment',
    energy_required: 0.5,
    enabled: true,
    ingredients: [
        { type: 'item', name: 'sediment', amount: 2 },
    ],
    result: 'copper-ore'
},
{
    type: 'recipe',
    name: 'stone-from-sediment',
    energy_required: 0.5,
    enabled: true,
    ingredients: [
        { type: 'item', name: 'sediment', amount: 1 },
    ],
    results: [
        { type: 'item', name: 'stone', amount_min: 5, amount_max: 5 },
    ],
},
{
    type: 'recipe',
    name: 'uranium-from-sediment',
    category: 'crafting-with-fluid',
    energy_required: 1,
    enabled: false,
    ingredients: [
        { type: 'item', name: 'sediment', amount: 4 },
        { type: 'fluid', name: 'sulfuric-acid', amount: 5 }
    ],
    result: 'uranium-ore',
},
{
    type: 'recipe',
    name: 'crude-coal-liquefaction',
    main_product: '',
    icon: '__base__/graphics/icons/fluid/coal-liquefaction.png',
    icon_size: 64,
    category: 'chemistry',
    subgroup: 'fluid-recipes',
    order: 'z[heavy-oil]',
    energy_required: 10,
    enabled: false,
    ingredients: [
        { type: 'item', name: 'coal', amount: 20 },
        { type: 'fluid', name: 'steam', amount: 50 },
    ],
    results: [
        { type: 'fluid', name: 'heavy-oil', amount_min: 25, amount_max: 25 }
    ]
},
{
    type: 'recipe',
    name: 'driftwood-forage',
    localised_name: [ 'recipe-name.driftwood-forage' ],
    always_show_products: true,
    category: 'hand-crafting',
    enabled: true,
    energy_required: 10,
    ingredients: [],
    result: 'wood',
    allow_as_intermediate: false,
    allow_decomposition: false,
}])