let hiddenTechs = [
    'mining-productivity-1',
    'mining-productivity-2',
    'mining-productivity-3',
    'mining-productivity-4',
]

for(let techName of hiddenTechs) {
    const tech = data.raw.technology[techName];
    tech.hidden = true;
    tech.enabled = false;
    if(tech.normal) {
        tech.normal.hidden = true;
        tech.normal.enabled = false;
    }
    if(tech.expensive) {
        tech.expensive.hidden = true;
        tech.expensive.enabled = false;
    }
}