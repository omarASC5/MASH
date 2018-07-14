function mash() {
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids!" + ", and you'll drive a " + getCar();
}

//this pure function will choose a random object from any array. It's resusable.
function randomFromArray(array) {
    const randomIndex = Math.random();
    const range = randomIndex * (array.length);
    const finalIndex = Math.floor(range);
    return array[finalIndex];
}

function getHome() {
    const homeType = ['Mansion','Apartment','Shack','House'];
    const homeChoice = process.argv[2];
        if (typeof homeChoice !== 'undefined') {
            homeType.push(homeChoice);
        }
    return randomFromArray(homeType);
}

function randomAnyRange(low, high) {
    //first it multiplies the random number by the absolute value of the 
    //high and low value for our new range!
    //then we add the low value to the random number in range: high - low
    //so it's in the range of our two parameters.
    const randomNumber = Math.floor((Math.random() * (high - low)) + low);
    return randomNumber;
}

function getChildrenCount() {
    const childCountChoice = process.argv[3];
    const randomChildCount = randomAnyRange(0,100);
    const possibleAmount = [randomChildCount];
        if (typeof childCountChoice !== 'undefined') {
             possibleAmount.push(childCountChoice);
        }

    return randomFromArray(possibleAmount);
}

function getCar() {
    const carChoice = process.argv[4];
    const possibleCar = ['lamborghini','ferrari','bugatti'];
        if (typeof carChoice !== 'undefined') {
            possibleCar.push(carChoice);
        }
        return randomFromArray(possibleCar);
}

console.log(mash());
