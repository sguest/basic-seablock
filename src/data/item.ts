data.extend([{
    type: 'item',
    name: 'seablock-electrolyzer',
    icons: [{ icon: data.raw.item['chemical-plant'].icon, icon_size: 64, tint: { r: 0.5, b: 1, g: 0.5 } }],
    subgroup: 'production-machine',
    order: 'b[electrolyzer]',
    stack_size: 10,
    place_result: 'seablock-electrolyzer'
},
{
    type: 'item',
    name: 'sediment',
    order: 'c[sediment]',
    subgroup: 'raw-material',
    stack_size: 200,
    icon_size: 64,
    icon: '__base__/graphics/icons/rock-big.png',
}])