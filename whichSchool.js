const whichSchool  = function (age) {
  // Your code in here ...
  
  if (age < 13) {
    return "Elementary School";
  } else if (age < 19) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }

}

console.log(whichSchool(14));