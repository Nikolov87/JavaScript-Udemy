'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      //   console.log(add(2, 3)); // this one is working because is IN SIDE THE SCOPE
    }
    // console.log(str);
    console.log(millenial); // this output is possible because been used VAR
    // console.log(add(2, 3)); // this one is not working because is OUT FROM THE SCOPE
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Petar';
calcAge(1987);
