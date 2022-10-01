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
