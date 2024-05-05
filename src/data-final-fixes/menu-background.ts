import { settingKeys } from '../setting-keys';

if(settings.startup[settingKeys.useMenuBackgrounds].value) {
    data.raw['utility-constants']['default'].main_menu_simulations = {};

    data.raw['utility-constants']['default'].main_menu_simulations['simple-seablock-menu-background-1'] = {
        checkboard: false,
        save: '__SimpleSeablock__/menu-simulations/SimpleSeablockMenu1.zip',
        length: 600,
        init: 'game.camera_zoom = 1.5',
    }

    data.raw['utility-constants']['default'].main_menu_simulations['simple-seablock-menu-background-2'] = {
        checkboard: false,
        save: '__SimpleSeablock__/menu-simulations/SimpleSeablockMenu2.zip',
        length: 600,
        init: `
            game.camera_zoom = 1.2
            game.camera_position = {x = 0, y = 10}
        `,
    }

    data.raw['utility-constants']['default'].main_menu_simulations['simple-seablock-menu-background-3'] = {
        checkboard: false,
        save: '__SimpleSeablock__/menu-simulations/SimpleSeablockMenu3.zip',
        length: 600,
        init: `
            game.camera_zoom = 1.2
        `,
    }
}