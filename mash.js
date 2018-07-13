function mash() {
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids!";
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
    return randomAnyRange(0,100);
}

console.log(mash());
