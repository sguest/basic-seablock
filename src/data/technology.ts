function removePrerequisite(techName: string, prerequisite: string) {
    let technology = data.raw.technology[techName];
    for(const [index, name] of pairs(technology.prerequisites)) {
        if(name === prerequisite) {
            table.remove(technology.prerequisites, index as number);
        }
    }
}

function addPrerequisite(techName: string, prerequisite: string) {
    table.insert(data.raw.technology[techName].prerequisites, prerequisite);
}

type sciencePackIngredient = [string, number];

function removeSciencePack(techName: string, packName: string) {
    let technology = data.raw.technology[techName];

    for(const [index, ingredient] of pairs(technology.unit.ingredients)) {
        if((ingredient as sciencePackIngredient)[0] === packName)  {
            table.remove(technology.unit.ingredients, index as number)
        }
    }
}

removePrerequisite('coal-liquefaction', 'production-science-pack');
removePrerequisite('coal-liquefaction', 'advanced-oil-processing');
addPrerequisite('coal-liquefaction', 'oil-processing');
removePrerequisite('advanced-oil-processing', 'chemical-science-pack');
addPrerequisite('advanced-oil-processing', 'oil-processing');
addPrerequisite('advanced-oil-processing', 'coal-liquefaction');

removeSciencePack('coal-liquefaction', 'chemical-science-pack');
removeSciencePack('coal-liquefaction', 'production-science-pack');
removeSciencePack('advanced-oil-processing', 'chemical-science-pack');

export {};