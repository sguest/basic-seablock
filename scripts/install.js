const fs = require('fs');
const path = require('path')
const info = require('../public/info.json');

fs.cpSync(
    path.resolve(__dirname, '../dist/SimpleSeablock'),
    process.env.APPDATA + '/Factorio/mods/SimpleSeablock_' + info.version,
    { recursive: true });