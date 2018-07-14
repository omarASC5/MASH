/**
 * You will have this amount of kids.
You will gain 0-60 pounds by the time you are 50:
You will enter and stay in this field for X years… /6. ====> keep fields broad: aka: stem and literature.
You will change careers this amount of times….
You will spend this amount of years at college….
You will drive this car..
You will live in this home type...
Your favorite place to visit with your kids will be….
Your favorite snack will be…

 */

//this pure function will choose a random object from any array. It's resusable.
function randomFromArray(array) {
    const randomIndex = Math.random();
    const range = randomIndex * (array.length);
    const finalIndex = Math.floor(range);
    return array[finalIndex];
}


function randomAnyRange(low, high) {
    //first it multiplies the random number by the absolute value of the 
    //high and low value for our new range!
    //then we add the low value to the random number in range: high - low
    //so it's in the range of our two parameters.
    const randomNumber = Math.floor((Math.random() * (high - low)) + low);
    return randomNumber;
}

function mash() {
    return "You will have " + getChildrenCount() + " kids. " + "You will enter the field of " + fieldToEnter() + " for " + timeInField() + " years. " + "You will change careers " + careerChangeAmount() + " times. " + "You will drive a " + getCar() + ". You will live in a " + getHome() + ". Your favorite place to visit with your kids will be the " + favoritePlaceToVisit() + ". Your favorite snack will be " + favoriteSnack() + ".";
}

function getChildrenCount() {
    const childCountChoice = process.argv[2];
    const randomChildCount = randomAnyRange(0,100);
    const possibleAmount = [randomChildCount];
        if (typeof childCountChoice !== 'undefined') {
             possibleAmount.push(childCountChoice);
        }

    return randomFromArray(possibleAmount);
}


function weightGained() {
    const weightGainedChoice = process.argv[3];
    const randomWeightGained = randomAnyRange(0, 60);
    const possibleAmount = [randomWeightGained];
        if (typeof weightGainedChoice !== 'undefined') {
            possibleAmount.push(weightGainedChoice);
        }
    return randomFromArray(possibleAmount);
}

function fieldToEnter() {
    const fieldChoice = process.argv[4];
    const possibleFields = ['Computers and Technology','Education and Social Services','Health Care and Allied Health', 'Arts and Communication','Trades and Transportation'];
        if (typeof fieldChoice !== 'undefined') {
            possibleFields.push(fieldChoice);
        }
        return randomFromArray(possibleFields);
}

function timeInField() {
    const timeChoice = process.argv[5];
    const randomTimeInField = randomAnyRange(0, 35);
    const possibleTime = [randomTimeInField];
        if (typeof timeChoice !== 'undefined') {
            possibleAmount.push(timeChoice);
        }
    return randomFromArray(possibleTime);
    
}

function careerChangeAmount() {
    return randomAnyRange(0,5);
}

function timeInCollege() {
    const timeChoice = process.argv[6];
    const possibleTime = ['0', '4', '8', '12'];
        if (typeof timeChoice !== 'undefined') {
            possibleAmount.push(timeChoice);
        }
    return randomFromArray(possibleTime);
    
}

function getCar() {
    const carChoice = process.argv[7];
    const possibleCar = ['lamborghini','ferrari','bugatti'];
        if (typeof carChoice !== 'undefined') {
            possibleCar.push(carChoice);
        }
        return randomFromArray(possibleCar);
}

function getHome() {
    const homeChoice = process.argv[8];
    const homeType = ['Mansion','Apartment','Shack','House'];
        if (typeof homeChoice !== 'undefined') {
            homeType.push(homeChoice);
        }
    return randomFromArray(homeType);
}

function favoritePlaceToVisit() {
    const placeChoice = process.argv[9];
    const possiblePlaces = ['movie theater', 'basketball court','park','beach','ice cream parlor'];
        if (typeof placeChoice !== 'undefined') {
            possiblePlaces.push(placeChoice);
        }
    return randomFromArray(possiblePlaces);
}

function favoriteSnack() {
    const snackChoice = process.argv[10];
    const possibleSnacks = ['ice cream','licorice','pop tarts','waffles','chocolate chip cookies','hot chocolate'];
        if (snackChoice !== 'undefined') {
            possibleSnacks.push(snackChoice);
        }
    return randomFromArray(possibleSnacks);
}

console.log(mash());
