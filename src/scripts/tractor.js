import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"


// const createdPlan = createPlan();

export const plantSeeds = (planArray) => {
    for (const row of planArray) {
        for (const seed of row) {
            // if (seed === 'Asparagus') {
            //     addPlant(createAsparagus())
            // }
            // if (seed === 'Wheat') {
            //     addPlant(createWheat())
            // }
            // if (seed === 'Soybean') {
            //     addPlant(createSoybean())
            // }
            // if (seed === 'Sunflower') {
            //     addPlant(createSunflower())
            // }
            // if (seed === 'Corn') {
            //     addPlant(createCorn())
            // } 
            // else if (seed === 'Potato') {
            //     addPlant(createPotato())
            // }
            
              seed === "Asparagus" ? addPlant(createAsparagus())
            : seed === "Wheat" ? addPlant(createWheat())
            : seed === "Soybean" ? addPlant(createSoybean()) 
            : seed === "Sunflower" ? addPlant(createSunflower())
            : seed === "Potato" ? addPlant(createPotato())
            : seed === "Corn" ?addPlant(createCorn())
            : null;
        }
    }
}
    

