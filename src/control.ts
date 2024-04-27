require('./control/starting-items');

script.on_init(() => {
    if(remote.interfaces['freeplay'] !== null) {
        remote.call('freeplay', 'set_disable_crashsite', true);
        remote.call('freeplay', 'set_skip_intro', true);
    }
})