let fieldArray = [];
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (let i = 0; i < seedObject.length; i++) {
            fieldArray.push(seedObject[i]);
        }
    } else {
        fieldArray.push(seedObject);
    }
}


export const usePlants = () => {
    return fieldArray
}