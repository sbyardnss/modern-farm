import { usePlants } from "./field.js"

const field = usePlants();

export const harvestPlants = (arr) => {
    let newField = [];
    // for (let i = 0; i < i.output; i++) {
    //     newField.push(i);
    // }
    // return newField;

    for (const plant of arr) {
        if (plant.type === 'Corn') {
            let counter = 0;
            while (counter < (plant.output / 2)) {
                newField.push(plant)
                counter++
            }

        }
        else {
            let counter = 0;
            while (counter < plant.output) {
                newField.push(plant)
                counter++
            }
        }
    }
    return newField
}

