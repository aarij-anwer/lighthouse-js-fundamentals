/*let counter = 60;
let message = '';

while (counter >= 0) {
  message = 'T-' + counter + ' seconds';
  if (counter === 50) {
    message = 'Orbiter transfers from ground to internal power';
  } else if (counter === 31) {
    message = 'Ground launch sequencer is go for auto sequence start';
  } else if (counter === 16) {
    message = 'Activate launch pad sound suppression system';
  } else if (counter === 10) {
    message = 'Activate main engine hydrogen burnoff system';
  } else if (counter === 6) {
    message = 'Main engine start';
  } else if (counter === 0) {
    message = 'Solid rocket booster ignition and liftoff!';
  }
  console.log(message);
  counter--;
}*/

/*var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (var x = 9; x>0; x--) {
  console.log("hello " + x);
}

let solution = 1;
let finalSolution = '12! = ';
for (let i = 12; i>0; i--) {
  solution *= i;
  if (i > 1) {
    finalSolution += i + ' * ';
  } else {
    finalSolution += i;
  }
}
console.log(solution);
console.log(finalSolution);

for (let i=0; i<26; i++) {
  for (let j=0; j<100; j++) {
    console.log(i + '-' + j);
  }
}*/

/*function laugh(num) {
  let answer = '';
  for (let i = 0; i < num; i++) {
    answer += 'ha';
  }
  return answer + '!';
}

console.log(laugh(3));*/
/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  for (let i = 1; i <= length; i++) {
    console.log(makeLine(i));
  }
}

buildTriangle(7);

function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Aarij";
  //callback(name);
  greeting(name);
}

processUserInput(greeting);*/
/*
var laugh = function(num) { 
  let answer = "";
  for (let i=0; i<num; i++) {
    answer += 'ha';
  }
  return answer + '!';
}

console.log(laugh(10));

var cry = function(){ 
    return "boohoo!";
};

cry();
*/

/*
// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
*/
/*
const chooseStations = function chooseStations(stations) {
  let name;
  let capacity;
  let type;
  let eligiblity = []; 

  for (let i = 0; i < stations.length; i++) {
    name = stations[i][0];
    capacity = stations[i][1];
    type = stations[i][2];

    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      eligiblity[eligiblity.length] = name;
    }
  }
  return eligiblity;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    moves[i] === 'north' ? y++ : y;
    moves[i] === 'south' ? y-- : y;
    moves[i] === 'east' ? x++ : x;
    moves[i] === 'west' ? x-- : x;
  }
  let final = [x,y];
  return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));


const ageCalculator = function(name, yearOfBirth, currentYear) {
  if (yearOfBirth > currentYear) {
    return 'Year of birth cannot be after the current year!';
  }
  
  let age = currentYear - yearOfBirth;
  return name + ' is ' + age + ' years old.';
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const howManyHundreds = function (num) {
  let answer = num / 100;
  return Math.floor(answer);
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

const calculateRectangleArea = function(length, width) {
  if (length >= 0 && width >= 0) {
    return length * width;
  }
  
}
const calculateTriangleArea = function(base, height) {
  if (base >= 0 && height >= 0) {
    return base * height / 2;
  }
}
const calculateCircleArea = function(radius) {
  if (radius >= 0) {
    return Math.PI * radius * radius;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
*/

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 10;
prices[2] = 10;
prices[6] = 10;
console.log(prices);

var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);


var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(rainbow.length,0,"Purple");

const hasEnoughPlayers = function (team) {
  return team.length >= 7 ? true : false;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell"];
console.log(hasEnoughPlayers(team));

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];
// Write your code here
test.forEach(function(element, index) {
  if (element % 3 === 0) {
    test[index] += 100;
  }
});
console.log(test);


var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(element) {
  element = element * 1.15;
  element = element.toFixed(2);
  element = Number(element);
  return element;
});

console.log(totals);

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    numbers[i][j] % 2 === 0 ? numbers[i][j] = 'even' : numbers[i][j] = 'odd';
  }
}

console.log(numbers);
