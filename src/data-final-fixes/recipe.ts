for(let [_, char] of pairs(data.raw.character)) {
    if(char.crafting_categories) {
        table.insert(char.crafting_categories, 'hand-crafting');
    }
}