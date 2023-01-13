// console.log("Welcome to the main module")
// import { createPlan } from "./plan.js"
// const {createAsparagus} = require("./seeds/asparagus.js");
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"




// const yearlyPlan = createPlan();
// console.log(yearlyPlan)

const asparagus = (createAsparagus())
const potato = (createPotato())
const corn = (createCorn())
console.log(asparagus)
console.log(corn)
console.log(potato)