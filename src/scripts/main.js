// console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
// const {createAsparagus} = require("./seeds/asparagus.js");
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"




// const yearlyPlan = createPlan();
// console.log(yearlyPlan)

/*
this all works

const asparagus = (createAsparagus())
const potato = (createPotato())
const corn = (createCorn())
console.log(asparagus)
console.log(corn)
console.log(potato)
*/


/*
this works

const asparagus = (createAsparagus())
console.log(asparagus)
addPlant(asparagus);
console.log(usePlants())
*/

const createdPlan = createPlan();
plantSeeds(createdPlan)
// console.log(createdPlan)

console.log(usePlants())