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


 var childCountChoice;
 var weightGainedChoice;
 var fieldChoice;
 var timeInFieldChoice;
 var timeInCollegeChoice;
 var carChoice;
 var placeChoice;
 var snackChoice;

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
    const randomChildCount = randomAnyRange(0,100);
    const possibleAmount = [randomChildCount];
        if (typeof childCountChoice !== 'undefined') {
             possibleAmount.push(childCountChoice);
        }

    return randomFromArray(possibleAmount);
}


function weightGained() {
    const randomWeightGained = randomAnyRange(0, 60);
    const possibleAmount = [randomWeightGained];
        if (typeof weightGainedChoice !== 'undefined') {
            possibleAmount.push(weightGainedChoice);
        }
    return randomFromArray(possibleAmount);
}

function fieldToEnter() {
    const possibleFields = ['Computers and Technology','Education and Social Services','Health Care and Allied Health', 'Arts and Communication','Trades and Transportation'];
        if (typeof fieldChoice !== 'undefined') {
            possibleFields.push(fieldChoice);
        }
        return randomFromArray(possibleFields);
}

function timeInField() {
    const randomTimeInField = randomAnyRange(0, 35);
    const possibleTime = [randomTimeInField];
        if (typeof timeInFieldChoice !== 'undefined') {
            possibleAmount.push(timeInFieldChoice);
        }
    return randomFromArray(possibleTime);
    
}

function careerChangeAmount() {
    return randomAnyRange(0,5);
}

function timeInCollege() {
    const possibleTime = ['0', '4', '8', '12'];
        if (typeof timeChoice !== 'undefined') {
            possibleAmount.push(timeInCollegeChoice);
        }
    return randomFromArray(possibleTime);
    
}

function getCar() {
    const possibleCar = ['lamborghini','ferrari','bugatti'];
        if (typeof carChoice !== 'undefined') {
            possibleCar.push(carChoice);
        }
        return randomFromArray(possibleCar);
}

function getHome() {
    const homeType = ['Mansion','Apartment','Shack','House'];
        if (typeof homeChoice !== 'undefined') {
            homeType.push(homeChoice);
        }
    return randomFromArray(homeType);
}

function favoritePlaceToVisit() {
    const possiblePlaces = ['movie theater', 'basketball court','park','beach','ice cream parlor'];
        if (typeof placeChoice !== 'undefined') {
            possiblePlaces.push(placeChoice);
        }
    return randomFromArray(possiblePlaces);
}

function favoriteSnack() {
    const possibleSnacks = ['ice cream','licorice','pop tarts','waffles','chocolate chip cookies','hot chocolate'];
        if (snackChoice !== 'undefined') {
            possibleSnacks.push(snackChoice);
        }
    return randomFromArray(possibleSnacks);
}

// console.log(mash());


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('How many kids do you want? \n', (answer) => {
        process.argv[2] = answer;
        childCountChoice = process.argv[2];
        resolve();
      })
    })
  }
  
  const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('How much weight would you like to gain by age 50? \n', (answer) => {
        process.argv[3] = answer;
        weightGainedChoice = process.argv[3];
        resolve();
      })
    })
  }

  const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Which field would you like to enter? \n', (answer) => {
        process.argv[4] = answer;
        fieldChoice = process.argv[4];
        resolve();
      })
    })
  }

  const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question('How long would you like to stay in a specific field? \n', (answer) => {
        process.argv[5] = answer;
        timeInFieldChoice = process.argv[5];
        resolve();
      })
    })
  }

  const question5 = () => {
    return new Promise((resolve, reject) => {
      rl.question('How long would you like to be in college? \n', (answer) => {
        process.argv[6] = answer;
        timeInCollegeChoice = process.argv[6];
        resolve();
      })
    })
  }
  
  const question6 = () => {
    return new Promise((resolve, reject) => {
      rl.question('What type of car do you wish to drive? \n', (answer) => {
        process.argv[7] = answer;
        carChoice = process.argv[7];
        resolve();
      })
    })
  }
  
  const question7 = () => {
    return new Promise((resolve, reject) => {
      rl.question('What is your favorite place to visit when you are bored? \n', (answer) => {
        process.argv[8] = answer;
        placeChoice = process.argv[8];
        resolve();
      })
    })
  }

  const question8 = () => {
    return new Promise((resolve, reject) => {
      rl.question('What is your favorite snack? \n', (answer) => {
        process.argv[9] = answer;
        snackChoice = process.argv[9];
        resolve();
      })
    })
  }

  const mash2 = () => {
    return new Promise((resolve, reject) => {
        console.log("You will have " + getChildrenCount() + " kids. " + "You will enter the field of " + fieldToEnter() + " for " + timeInField() + " years. " + "You will change careers " + careerChangeAmount() + " times. " + "You will drive a " + getCar() + ". You will live in a " + getHome() + ". Your favorite place to visit with your kids will be the " + favoritePlaceToVisit() + ". Your favorite snack will be " + favoriteSnack() + ".");
        resolve();
    })
  }
  



  const main = async () => {
    await question1();
    await question2();
    await question3();
    await question5();
    await question6();
    await question8();
    await mash2();

    rl.close();
  }
  

main();





