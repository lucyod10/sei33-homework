
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num1) {
  let result = num1 * num1;
  console.log(`The result of squaring the number ${num1} is ${result}`);
  return result;
};

squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function  halfNumber(num1){
  const result = num1/2;
  console.log(`Half of ${num1} is ${result}`);
  return result;
};

halfNumber(4);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentageOf(num1, num2) {
  const result = num1/num2*100;
  console.log(`${num1} is ${result}% of ${num2}.`);
  return result;
};

percentageOf(10,20);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
    const area = (Math.PI * radius * radius).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${area}`);
    return area;
};

areaOfCircle(2);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


const writeAllFun = function(num) {
    const result1 = halfNumber(num);
    const result2 = squareNumber(result1);
    const result3 = areaOfCircle(result2);
    const result4 = percentageOf(result3,result2);

};

 writeAllFun(10);
