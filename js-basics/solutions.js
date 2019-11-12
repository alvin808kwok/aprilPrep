// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 
// Single line comments start with //
/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */


/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);  // <= this should print out sebastian the pug

/*
* #1
* Variables with a "String" value

* Declare variables named firstName, lastName, birthPlace, favFood, favDrink, favSong, favAnimal, favColor, favSport, favDoughnut.

* Assign your own string values to each variable and console.log each variable.
*/
var firstName = 'Ronald';
console.log(firstName);

var lastName = 'McDonald';
console.log(lastName);

var birthPlace = 'San Bernardino, CA';
console.log(birthPlace);

var favFood = 'Big Macs';
console.log(favFood);

var favDrink = 'Coke';
console.log(favDrink);

var favSong = 'Mo Money Mo Problems';
console.log(favSong);

var favAnimal = 'Grimmace';
console.log(favAnimal);

var favColor = 'red';
console.log(favColor);

var favSport = 'Corn Hole';
console.log(favSport);

var favDoughnut = 'Krispy Kreme';
console.log(favDoughnut);
/*
* #2
* Variables with a Number value
*
* Declare variables named favNumber, yourShoeSize, thatOnePrinceSong, floorsAlaMoanaHotel, numOfJapanPrefectures, numOfABCstoresinHi, and cheesecakesFlavAtCheeseCakeFac
*
* Assign your own number values to each variable and console.log each variable.
*/
var favNumber = 36899;
console.log(favNumber);

var yourShoeSize = 11;
console.log(yourShoeSize);

var thatOnePrinceSong = 7;
console.log(thatOnePrinceSong);

var floorsAlaMoanaHotel = 38;
console.log(floorsAlaMoanaHotel);

var numOfJapanPrefectures = 47;
console.log(numOfJapanPrefectures);

var numOfABCstoresinHi = 57;
console.log(numOfABCstoresinHi);

var cheesecakesFlavAtCheeseCakeFac = 34;
console.log(cheesecakesFlavAtCheeseCakeFac);
/*
* #3
* Variables with a Boolean value
*
* Declare variables named likesMcDonalds, eatsDoughnuts and ownsRedShoes.
*
* Assign your own boolean values to each variable and console.log each variable.
*
* 
* Now, use comparison and logic operators (>, <, >=, <=, ===, !==) to make the following variables True of False
*
* Console.log each variable.
*
*/
var likesMcDonalds = true;
console.log(likesMcDonalds);

var eatsDoughnuts = false;
console.log(eatsDoughnuts);

var ownsRedShoes = true;
console.log(ownsRedShoes);

//For example:
//Make me True:
var booya1 = 3 > 2; 
console.log('booya1:' , booya1);

//Make me False:
var booya2 = 5<2;
console.log('booya2:' , booya2);

//Make me True:
var booya3 = 10 >= 10;
console.log('booya3:' , booya3);

//Make me False:
var booya4 = 11 <= 9;
console.log('booya4:' , booya4);

//Make me True:
var booya5 = 'Mayor McCheese' === 'Mayor McCheese';
console.log('booya5:' , booya5);

//Make me False:
var booya6 = 'hamburglar' !== 'hamburglar';
console.log('booya6:' , booya6);
/*
* #4
* Variables with a Null value
*
* Declare variables named completedPrepClass, traveledToMars and buyVicADrink.
*
* Assign a null value to each variable and console.log each variable. 
*/
var completedPrepClass = null;
console.log(completedPrepClass);

var traveledToMars = null;
console.log(traveledToMars);

var buyVicADrink = null;
console.log(buyVicADrink);
/*
* #5
* Variables with a undefined value.
*
* Declare a variable named superBowlChamps, nextPres and hawaiiRail.
*
* Do not assign a value to the variable and console.log each variable.
*/
var superBowlChamps;
console.log(superBowlChamps);

var nextPres;
console.log(nextPres);

var hawaiiRail;
console.log(hawaiiRail);
/*
* #6
* Variables with an Array value
* 
* Declare a variable named plateLunch and assign it an array containing 5 of your favorite lunch items.
* Declare a variable named `donutBox` and assign it an array containing 5 donuts of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `hamajang` and assign it an array containing 6 different data types.
* Declare a variable named `dynamicDuos` and assign it an array containing 3 arrays, with each array containing items that match with one another.
*
* Console.log each variable.
*/
var plateLunch = ['mac salad', 'orange chicken', 'garlic chicken', 'meat jun', 'kalbi'];
console.log(plateLunch);

var donutBox = ['old fashion', 'buttermilk', 'pb and chocolate', 'coffee cake', 'poi malasada'];
console.log(donutBox)

var westCoast = ['California', 'Oregon', 'Washington'];
console.log(westCoast);

var lotteryResult = [11, 8, 2, 88, 3];
console.log(lotteryResult);

var hamajang = ['string', 0, ['this', 'is', 'an', 'arrray'], null, 5>3, 6<2, undefined];
console.log(hamajang);

var dynamicDuos = [['peanut butter', 'chocolate'], ['gin', 'tonic'], ['orange', 'chicken']];
console.log(dynamicDuos);
//*7
//Accessing values in Arrays

var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];

// Console.log the entire array.
// Console.log the length of this array.
// Console.log only "carrot cake" from this array.
// Console.log only "cool ranch doritos" from this array

console.log(partyList);
console.log(partyList.length);
console.log(partyList[0]);
console.log(partyList[4]);

/*#8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
*
* Using the fullName and birthPlace variables, console.log the following:
*
* "Hi my name is fullName and I was born in birthPlace." 
*
* i.e "Hi my name is Bruce Wayne and I was born in Gotham."
*/

var fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log('Hi name is is ' + fullName + ' and I was born in ' + birthPlace + '.');

/*
* #9 
* Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named sum.
* Subtract the two variables and store it to a new variable named difference.
* Mulitply the two variables and store it to a new variable named product.
* Divide the two variables and store it to a new variable named quotient.
* Find the remainder (modulus) of the two variables and store in to a new variable names leftOver.
*
* Console.log each new variable.
*/

var num1 = 9;
var num2 = 11;

var sum = num1 + num2;
console.log('sum:' , sum);

var difference = num1 - num2;
console.log('difference:' , difference);

var product = num1 * num2;
console.log('product:' , product);

var quotient = num1 / num2;
console.log('quotient:' , quotient);

var leftOver = num1 % num2;
console.log('modulus:' , leftOver);
/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality (===).
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality (==).

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Console.log the variables. Do you see the difference between strict equality vs. equality?
*/

var isStrictlyEqual = 'Tacocat' === 'tacocat';
console.log(isStrictlyEqual);

var isLooselyEqual = 'Tacocat' == 'tacocat';
console.log(isLooselyEqual);

var sameNum = '5' === 5;
console.log(sameNum);

var sameNumba = '5' == 5;
console.log(sameNumba);
/* 
* #11
* Logical AND Logical OR
* Use comparison and logic operators (>, <, >=, <=, ===, !==) with the logical && and logical || to make the following variables True of False:
*/

//Use && to make me True
var booya7 = 10>5 && 3<8;
console.log('booya7:' , booya7);

//Use && to make me False
var booya8 = 5>4 && 5<4;
console.log('booya8:', booya8)

//Use || to make me True
var booya9 = 9<11 || 9>11;
console.log('booya9:' , booya9);

//Use || to make me False
var booya10 = 7>8 || 8>9;
console.log('booya10:' , booya10);

//Console.log each variable

/*
* #12
* Assignments
* Variables with the outcome of an assignment operation (+=, -=, *=, /=, %=):
*
* Declare a variable named `myNum` and assign it with a number of your choosing.
* 
* Change the value of the muNum variable by using the assignment operators and console.log myNum after each assignment.
*/
var myNum = 19;
console.log(myNum);

//increment and assign 3 (+=):
myNum += 3;
console.log(myNum);

//decrement and assign 1 (-=):
myNum -= 1;
console.log(myNum);

//multiple and assign 2 (*=);
myNum *= 2;
console.log(myNum);

//divide and assign 5 (/=);
myNum /= 5;
console.log(myNum);

//modulo and assign 4 (%=);
myNum %= 4;
console.log(myNum);


/*===================================================================*/

/*
* Final Boss 

* The following exercises are designed to further challenge you and give you a jump start on the next topic that'll be covered. Let the boss battle begin!
*
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named bakePie which has a single parameter ingredient.
* 
* When the function is invoked, it should return a string, "Today's special is ingredient pie." Where ingredient will be the value that you pass into the function.
* 
* For example, if the value is `blueberry`, it should return "Today's special is blueberry pie."
* 
* Declare a variable pieResult and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named jump which has a single parameter, height.
* 
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* 
* For example, if the value is 9, it should return "You jumped 9 feet high!"

* Declare a variable jumpResult and assign it to the function call.
* Console.log the variable to see the result.
*/


/*
* Declare a Function named makeFood which takes three parameters, ingredient1, ingredient2, recipeName.
* 
* This function should return a string ingredient1 and ingredient2 make a recipeName. Where ingredient1, ingredient2 and recipeName will be the values that you pass into the function.
* 
* For example, if the values are "Cheese", "Bacon", "pancake" it should return "Cheese and bacon make a pancake."
*
* Declare a variable foodResult and assign it to the function call. Console.log the variable to see the result.
*/

