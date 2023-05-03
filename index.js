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
