import { harvestPlants } from "./harvester.js"
import { usePlants } from "./field.js"

const field = usePlants();
const harvestedPlants = harvestPlants(field);
let html = "";

export const catalog = (arr) => {
    for (const food of arr) {
        const section = `<section class="plant">${food.type}</section>\n`;
        html += section;
    }
    return html;
}

