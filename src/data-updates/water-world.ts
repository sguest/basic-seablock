const noise = require('noise');
const absolute_value = noise.absolute_value;
const less_or_equal = noise.less_or_equal;

data.extend([{
    type: 'noise-expression',
    name: 'seablock-water-world',
    intended_property: 'elevation',
    expression: noise.define_noise_function((x: number, y: number, tile: any, map: any) =>
        10 * (less_or_equal(absolute_value(x), 1) + less_or_equal(absolute_value(y), 1)) - 20
    ),
}])

const waterWorldPreset: prototype.MapGenPreset = {
    order: 'q',
    basic_settings: {
        property_expression_names: {
            elevation: 'seablock-water-world',
            default_enable_all_autoplace_controls: false
        },
        autoplace_controls: {
            trees: { size: 0 },
            'enemy-base': { size: 0 },
            'iron-ore': { size: 0 },
            'copper-ore': { size: 0 },
            'stone': { size: 0 },
            'coal': { size: 0 },
            'uranium-ore': { size: 0 },
            'crude-oil': { size: 0 },
        },
        terrain_segmentation: 1,
        water: 0
    },
    advanced_settings: {
        difficulty_settings: { research_queue_setting: 'always' }
    }
}

const mapPresets = data.raw['map-gen-presets'] as any;

mapPresets.default['seablock-water-world'] = waterWorldPreset;