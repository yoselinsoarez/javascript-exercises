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

/***Now we want to know if the central A of the radioano is close

to being tuned. This happens when it is between 437 Hz and 443 Hz,
but is NOT exactly 440Hz.
Define the function estaCerca
*/
function estaCerca(la) {
  return la >= 437 && la <= 443 && la !== 440;
}

/***For an important conference, the organizing asked us to write identification cards that each attendee will have.
To do this, we have to gather their name, last name, and title (dr., Ms., lic., etc.) and put it together into a single string.
Define the function escribirCartelito that takes a title, a name, and a last name, and forms a single string. */

function escribirCartelito(name, lastName, title) {
  return title + " " + name + " " + lastName;
}

/***Sometimes on our identification card, we only want the title and last name, without the name.
That's why we now have to improve our function escribirCartelito so that it has 4 parameters:
the title;
the name;
the last name;
a boolean that indicates whether we want a short identification card with only title and last name or a long one, as before.
Define the function escribirCartelito so that it behaves as described above.
*/

function escribirCartelito(title, name, lastName, shortPoster) {
  if (shortPoster) {
    return title + " " + lastName;
  } else {
    return title + " " + name + " " + lastName;
  }
}

/***Now that we can write our large and small identification cards,
we want a new function that gives us the optimal-sized identification card:
if the name and last name, in total, have more than 15 letters,
we want a short identification card;
otherwise, we want a long identification card.
Define the function escribirCartelitoOptimo that takes a title, a name, and a last name,
and using escribirCartelito generates a short or long identification card,
according to the above rules.
*/

function escribirCartelitoOptimo(title, name, lastName) {
  return escribirCartelito(
    title,
    longitud(name) + longitud(lastName) > 15 || name,
    lastName,
    longitud(name) + longitud(lastName) > 15
  );
}

/***Define a function decisionConMoneda,
which takes three parameters and returns the second if the first is "heads,"
or the third if it comes up "tails".
*/

function decisionConMoneda(estadoMoneda, opcionCara, opcionCeca) {
  if (estadoMoneda === "cara") {
    return opcionCara;
  } else {
    return opcionCeca;
  }
}

/**Define the functions perimetroCirculo and areaCirculo that

receive the radius of a circle and return its perimeter and area
respectively.
*/
function perimetroCirculo(radio, pi) {
  return 2 * pi * radio;
}
function areaCirculo(radio) {
  return pi * radio * radio;
}

/**Define a function ascensorSobrecargado that takes a number of people and

returns whether they exceed the maximum load of 300 kg.
Note that our function will use two global variables:
pesoPromedioPersonaEnKilogramos, which is already declared, and
cargaMaximaEnKilogramos, which you will need to declare.
*/
let cargaMaximaEnKilogramos = 300;

function ascensorSobrecargado(cantidadPersonas) {
  return (
    cantidadPersonas * pesoPromedioPersonaEnKilogramos < cargaMaximaEnKilogramos
  );
}

/**Define the procedure aumentarFortuna that doubles the value 
 * of the global variable

pesosEnMiBilletera. Do not declare the variable, 
we have already done it for you
(with a secret amount of money).
*/
function aumentarFortuna() {
  return (pesosEnMiBilletera *= 2);
}

/*** Define the usarCierre procedure so that we can open and close

the zipper of a backpack.
*/
let backpackOpen = true;
function usarCierre() {
  return (backpackOpen = !backpackOpen);
}

/*** Define esMayorDeEdad, which receives an age,

and then define esMenorDeEdad based on it.
*/
function esMayorDeEdad(age) {
  return age >= 18;
}

function esMenorDeEdad(age) {
  return !esMayorDeEdad(age);
}

/** Define a function esPeripatetico that takes a person's profession,

nationality, and the number of kilometers they walk per day.
Someone is a peripatetic when they are a Greek philosopher
and like to walk (they walk more than 2 kilometers per day).
*/
function esPeripatetico(profession, nationality, kilometersPerDay) {
  return (
    profession === "philosopher" &&
    nationality === "Greek" &&
    kilometersPerDay > 2
  );
}

/** A friend needed to do some paperwork at the bank,

but when she arrived she noticed that it was closed.
To avoid it happening again, we are going to define a function
that helps forgetful people like her.
We know that the bank is closed when:
It is a holiday, or
It is the weekend, or
We are not within banking hours.
We have already defined the function dentroDelHorarioBancario,
which receives an hour (a whole hour from 0 to 23) and tells us
if it is within the bank's hours of operation.
Define the functions esFinDeSemana and estaCerrado.
*/
function esFinDeSemana(days) {
  return days === "saturday" && days !== "thursday";
}

function estaCerrado(isHoliday, days, schedule) {
  return (
    isHoliday || esFinDeSemana(days) || !dentroDelHorarioBancario(schedule)
  );
}

/** Rala is designing a web page and is focusing on the contrast of its components.

To achieve this, she asked us to define the function tieneContraste
that receives the font color and the background color of the page as arguments
and returns whether the page has contrast.
To start, we already have the function esTonoClaro that takes a color as a parameter
and returns whether it is light.
*/
function tieneContraste(fontColor, backgroundColor) {
  return esTonoClaro(fontColor) !== esTonoClaro(backgroundColor);
}

/**
 *Norma can concentrate when programming and drinks infusions, 
 *but not any infusion. It has to be mate at exactly 80ºC or 
tea that is at least 95ºC.

Define the function sePuedeConcentrar that receives a drink, 
its temperature, and a boolean that tells us if Delfi is programming.
 */
function sePuedeConcentrar(drink, temperature, isProgramming) {
  return (
    ((drink === "mate" && temperature === 80) ||
      (drink === "tea" && temperature >= 95)) &&
    isProgramming
  );
}

/**In a city amusement park, they installed a new roller coaster and 
 *asked us for help to tell people if they can get on or not before queuing. 
The requirements to ride the attraction are:

Reach the minimum height of 1.5m (or 1.2m if accompanied by an adult person)
Not having any heart condition.

Define the function puedeSubirse that receives three parameters: 
a person's height in meters, whether they are accompanied, and whether they have 
any heart condition. */

function puedeSubirse(height, accompanied, heartCondition) {
  return (height >= 1.5 || (height >= 1.2 && accompanied)) && !heartCondition;
}

/** Define the "trasladar" procedure, which takes two lists and an element from the first.

trasladar should remove the element from the first list and add it to the second.
*/
function trasladar(lista1, lista2, elemento) {
  remover(lista1, elemento);
  agregar(lista2, elemento);
}

/*** Define the "contiene" function that tells us whether a list contains a certain element.
 */
function posicion(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i;
    }
  }
  return -1;
}

function contiene(lista, elemento) {
  return posicion(lista, elemento) !== -1;
}

/** Redefine the "medallaSegunPuesto" function, but this time using at most a single if statement.

Perhaps lists can be useful here.
We remind you what the function does: it must return the medal that corresponds to the top positions in a competition.
Hint:
How can a list be useful here? If we had a list with the medals, the position can help us know which one corresponds.
*/
//This is the definition of the "medallaSegunPuesto" function that receives a parameter called "puesto" (position).
function medallaSegunPuesto(puesto) {
  let medallas = [
    "oro",
    "plata",
    "bronce",
    "nada",
  ]; /**A variable called "medallas" is declared, which contains an array with the names of the medals. */
  let indice =
    puesto -
    1; /**A variable called "indice" is declared, which is initialized with the value of "puesto - 1". This is done because arrays in JavaScript start at position 0 and not at position 1. / */
  let medalla =
    "nada"; /**A variable called "medalla" is declared, which is initialized with the value of "nada" */

  if (indice < medallas.length) {
    /**A comparison is made to see if the value of "indice" is less than the size of the "medallas" array. If this is true, then the value that is in the "medallas" array position "indice" is assigned to the "medalla" variable. */

    medalla = medallas[indice];
  }
  return medalla; /**Finally, the value of the "medalla" variable is returned. */
}

/** The "medallaSegunPuesto" function receives a number that represents the position of a participant in a competition and returns the name of the medal that corresponds to them, or "nada" if the position is greater than the number of available medals. */

/** Complete the "saludar" procedure that receives a list of people and prints
 *a greeting with "hello" for each of them.
 */

function saludar(personas) {
  for (let persona of personas) {
    imprimir("hello " + persona);
  }
}
