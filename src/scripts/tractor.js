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
            if (seed === 'Asparagus') {
                addPlant(createAsparagus())
            }
            if (seed === 'Wheat') {
                addPlant(createWheat())
            }
            if (seed === 'Soybean') {
                addPlant(createSoybean())
            }
            if (seed === 'Sunflower') {
                addPlant(createSunflower())
            }
            if (seed === 'Corn') {
                addPlant(createCorn())
            } 
            else if (seed === 'Potato') {
                addPlant(createPotato())
            }
            
            //   seed.type === "Asparagus" ? addPlant(createAsparagus())
            // : seed.type === "Wheat" ? addPlant(createWheat())
            // : seed.type === "Soybean" ? addPlant(createSoybean()) 
            // : seed.type === "Sunflower" ? addPlant(createSunflower())
            // : seed.type === "Potato" ? addPlant(createPotato())
            // : seed.type === "Corn" ?addPlant(createCorn())
            // : null;
        }
    }
}
    

