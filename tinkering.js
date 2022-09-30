let counter = 60;
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
}

/*var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}*/

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
}