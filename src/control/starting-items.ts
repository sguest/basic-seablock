import { settingKeys } from '../setting-keys';

script.on_event(defines.events.on_player_created, e => {
    let player = game.players[e.player_index];

    if(player.controller_type === defines.controllers.character)
    {
        const items = [
            { name: 'landfill', count: settings.startup[settingKeys.startingLandfillCount].value as number },
            { name: 'bob-greenhouse', count: 1 },
            { name: 'offshore-pump', count: 1 },
            { name: 'boiler', count: 1 },
            { name: 'steam-engine', count: 1 },
            { name: 'stone-furnace', count: 1 },
            { name: 'lab', count: 1 },
            { name: 'seablock-electrolyzer', count: 1 },
            { name: 'small-electric-pole', count: 20 },
            { name: 'pipe', count: 20 },
            { name: 'wood', count: 50 },
        ];

        player.get_inventory(defines.inventory.character_main).clear();

        for(let item of items) {
            player.insert(item);
        }
    }
})