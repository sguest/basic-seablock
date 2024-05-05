import { settingKeys } from './setting-keys';

data.extend([
    {
        type: 'bool-setting',
        name: settingKeys.useMenuBackgrounds,
        setting_type: 'startup',
        default_value: true,
        order: '1'
    },
    {
        type: 'int-setting',
        name: settingKeys.startingLandfillCount,
        setting_type: 'startup',
        default_value: 1000,
        minimum_value: 0,
        maximum_value: 7000,
        order: '2'
    },
    {
        type: 'bool-setting', 
        name: settingKeys.disableMiningDrills,
        setting_type: 'startup',
        default_value: true,
        order: '3'
    },
    {
        type: 'bool-setting',
        name: settingKeys.disablePumpjacks,
        setting_type: 'startup',
        default_value: true,
        order: '4'
    },
    {
        type: 'bool-setting',
        name: settingKeys.disableMiningProductivity,
        setting_type: 'startup',
        default_value: true,
        order: '5',
    },
    {
        type: 'bool-setting',
        name: settingKeys.disableCrudeOil,
        setting_type: 'startup',
        default_value: true,
        order: '6'
    },
])