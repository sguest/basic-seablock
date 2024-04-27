const electrolyzer = table.deepcopy(data.raw['assembling-machine']['chemical-plant']);
const tint = { r: 0.5, b: 1, g: 0.5 };
electrolyzer.name = 'seablock-electrolyzer';
electrolyzer.icons = [{
    icon: electrolyzer.icon,
    tint: { r: 0.5, b: 1, g: 0.5 },
    icon_size: electrolyzer.icon_size,
}];
electrolyzer.map_color
electrolyzer.energy_usage = "256kW";
electrolyzer.crafting_categories = ['seablock-electrolyzer'];
electrolyzer.minable.result = 'seablock-electrolyzer';
electrolyzer.fixed_recipe = 'sediment-from-water';
if('north' in electrolyzer.animation) {
    for(let layer of electrolyzer.animation.north.layers) {
        layer.tint = tint;
        layer.hr_version.tint = tint;
    }
    for(let layer of electrolyzer.animation.south.layers) {
        layer.tint = tint;
        layer.hr_version.tint = tint;
    }
    for(let layer of electrolyzer.animation.east.layers) {
        layer.tint = tint;
        layer.hr_version.tint = tint;
    }
    for(let layer of electrolyzer.animation.west.layers) {
        layer.tint = tint;
        layer.hr_version.tint = tint;
    }
}
data.extend([electrolyzer]);