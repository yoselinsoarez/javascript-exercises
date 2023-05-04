/* Define a function called half, which takes a number as a parameter 
and returns its half. */

function half(number) {
  return number / 2;
}

/** Define the following functions:
previous: takes a number and returns that number minus one
triple: returns the triple of a number
previousOfTriple: which combines the two previous functions:
multiplies a by 3 and subtracts 1.
*/

function previous(number) {
  return number - 1;
}

function triple(number) {
  return number * 3;
}
function previousOfTriple(number) {
  return previous(triple(number));
}

/** Dani says that someone likes to read:

When the number of books she remembers having read is greater than 20.
Define and test the leGustaLeer console. */
function leGustaLeer(books) {
  return books > 20;
}

/** Define the following functions:
isBetween, which takes three numbers and tells if the first is greater than the second
and less than the third
isOutOfRange, which takes three numbers and
tells if the first is less than the second or greater than the third.
*/

function isBetween(a, b, c) {
  return a > b && a < c;
}
function isOutOfRange(a, b, c) {
  return a < b || a > c;
}

/** Define the function esFinDeSemana that takes a string

that represents the name of a day of the week
and tells us if it is Saturday or Sunday.
*/
function esFinDeSemana(days) {
  return days === "saturday" || days === "sunday";
}

/** Define the function longitudNombreCompleto,

which takes a name, a second name, and a last name,
and returns its total length counting two extra spaces to separate them.
*/
function longitudNombreCompleto(name, secondName, lastName) {
  return length(name + " " + secondName + " " + lastName);
}

/** Define the scream function, for this the function must be used

convertToUppercase, which converts a string to uppercase.
and returns it in uppercase and between exclamation marks. */
function scream(aString) {
  return convertToUppercase("!" + aString + "!");
}

/** Define the maximum function, which works like Math.max (without using it)

which returns the maximum between two numbers.
For example, the maximum between 4 and 5 is 5, the maximum between 10 and 4 is 10.
*/
function maximum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/** Define the sign function, which given a number returns:
1 if the number is positive
0 if the number is 0
-1 if the number is negative
*/

function sign(number) {
  if (number > 0) {
    return 1;
  } else if (number === 0) {
    return 0;
  } else {
    return -1;
  }
}

/** For Lorena a number is lucky if:
it is positive, and
is less than 100, and
it is not 15.

Define the function esNumeroDeLaSuerte that given a number
says if it meets the above logic. You can't use if!
*/
function esNumeroDeLaSuerte(number) {
  return number > 0 && number < 100 && number !== 15;
}

/**
 * The jury of a tournament asked us for the function,

medalAccordingToPosition that returns the medal corresponding
to the top positions, according to the following logic:
first place: "gold" medal
second place: "silver" medal
third place: "bronze" medal
other positions: "nothing"
 */

function medalAccordingToPosition(position) {
  if (position === 1) {
    return "gold";
  } else if (position === 2) {
    return "silver";
  } else if (position === 3) {
    return "bronze";
  } else {
    return "nothing";
  }
}

//Practice functions and data types
/**We want to buy a new computer, and we would like to know how much it will cost us.
We know that:
Monitors cost $80 per inch
Memory costs $150 per GB
The estimated base price for the rest of the components is $900

Define the cuantoCuesta function that takes the number of inches of the monitor and the amount of memory, and calculates the estimated cost of our computer.
*/
function cuantoCuesta(inches, memory) {
  return 900 + inches * 80 + memory * 150;
}

/**Now that we know how much a computer costs,

we want to know if a computer is convenient for us. This happens when:
It costs less than $6000 and
It has at least a 32-inch monitor and
It has at least 8 GB of memory
Define the meConviene function, which again takes the number of inches
and amount of memory and tells us if it is convenient for us to buy it.
You can use the cuantoCuesta function.
And how do I invoke cuantoCuesta? By passing as the first argument the number
of inches and as the second the amount of memory.
*/

function meConviene(inches, memory) {
  cuantoCuesta(inches, memory);
  return cuantoCuesta(inches, memory) < 6000 && inches >= 32 && memory >= 8;
}

/*Define the functions perimetroTriangulo and anguloTriangulo
perimetroTriangulo: given the three sides of a triangle, we want to know its perimeter.
areaTriangulo: given the base and height of a triangle, we want to know its area.*/

function perimetroTriangulo(lado) {
  return lado * 4;
}

function anguloTriangulo(lado) {
  return lado * lado;
}

/***Define the functions perimetroTriangulo and anguloTriangulo
perimetroTriangulo: given the three sides of a triangle, we want to know 
its perimeter.
areaTriangulo: given the base and height of a triangle, 
we want to know its area.
*/
function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function anguloTriangulo(base, altura) {
  return (base * altura) / 2;
}

/**Define a function estaAfinado that receives a frequency

(a number) from the center, and returns whether that frequency
is equal to 440 Hz. */
function estaAfinado(la) {
  return la === 440;
}

/***Now we want to know if the central A of the piano is close

to being tuned. This happens when it is between 437 Hz and 443 Hz,
but is NOT exactly 440Hz.
Define the function estaCerca
*/
function estaCerca(la) {
  return la >= 437 && la <= 443 && la !== 440;
}
