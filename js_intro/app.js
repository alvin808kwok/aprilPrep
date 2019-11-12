//1. Comments are used to explain code and used to prevent execution.
// For a single line comment use //
// For mulitple line comments use /* */

// Add a single line comment next to the code below:

//var today = "Monday";

// Next, using the multiple line comments, comment out the following code:

//  function commentOut(str){
//   console.log(str + " is a great day!");
//  }

/*2. Declare a variable named peanuts and assign it with your favorite Peanuts character. 
Console.log the variable.*/

var peanuts = 'Snoopy';
console.log(peanuts);

/*3. Declare a variable named snoopyAge and assign it with Snoopy's real age.
Console.log the variable.*/

var snoopyAge = 253;
console.log(snoopyAge);

/*4. Declare a variable named isCharlieBrownHip and assign it with a boolean value of your choice.
Console.log the variable.*/

var isCharlieBrownHip = true;
console.log(isCharlieBrownHip);

/*5. Declare a variable named peanutsGang and assign it with an array of 5 of Peanuts characters.
Console.log the variable.
Console.log only the first element in the array
Console.log only the last element in the array
Console.log the length of the arrray*/

var peanutsGang = ['Charlie Brown', 'Linus van Pelt', 'Lucy van Pelt', 'Snoopy', 'Woodstock'];
console.log(peanutsGang[0]);
console.log(peanutsGang[4]);
console.log(peanutsGang.length);

/*6. Declare a variable named peanutsEndDate and assign it with null data type. 
Console.log the variable.*/

var peanutsEndDate = null;
console.log(peanutsEndDate);

/*7. Declare a variable named phrase that will concatenate the following variables below to form a sentence that will read:
'Charlie Brown you are a blockhead!';
Console.log the variable*/

var character = 'Charlie Brown';
var quote = 'you are a blockhead!';
console.log(character + ' ' + quote);

/*8. Declare a variable named myFav that will concatenate your favorite Peanuts character (#2 above) to form a sentence that will read:
'My favorite Peanuts character is xxxxxx.'
Console.log the variable.*/

var myFav = 'My favorite Peanuts character is ' + peanuts + '.';
console.log(myFav);

/*9. As a valued customer at the Bank of Honolulu, you make a deposit of $1000. 
Your savings account balance prior to the deposit has an amount of $8000. Calculate the new savings account balance. 
Console.log the new savings account balance.*/

var currentBalance = 8000;
var deposit = 1000;

var newBalance = currentBalance + deposit;
console.log('$' + newBalance)

/*10. You are bitten by the cryptocurrency bug and decide to withdraw $3000 to purchase Bitcoins. 
Calculate your new savings account balance. 
Console.log the new savings account balance.*/

var withdraw = 3000;
var newSavingsBal = newBalance - withdraw;

console.log('$' + newSavingsBal);

/*11. Today is your lucky day! 
After purchasing 2 Bitcoins, someone mining the blockchain is giving away an extra coin to anyone who just made a Bitcoin purchase. 
Update the quantity of your Bitcoin.
Console.log the new Bitcoin quantity amount.*/

var bitCoinQty = 2;
bitCoinQty++;

console.log(bitCoinQty);

/*12. Your bank is having a promotion. 
Any savings account balance that is an even number will win a cash prize of $500 that will be deposited into the savings account. 
Use the modulus operator to check whether your savings account balance is an even number. 
Console.log the new savings account balance.*/

var evenAccount = newSavingsBal % 2;
console.log(evenAccount)
var prize = 500;
var savingsTotal = newSavingsBal + prize;
console.log('$' + savingsTotal);


/*13. You need to pay taxes on the $500 cash prize that you won to the IRS :( 
  The tax rate is 30%. Calculate the tax amount and your adjusted savings account balance.
Console.log the tax amount and your new savings account balance.*/

var taxRate = 0.30;
var taxAmount = prize * taxRate;
console.log(taxAmount);
var newSavingsTotal = savingsTotal - taxAmount;
console.log('$' + newSavingsTotal);

/*14. The savings account accrues an annual interest rate of 2%. 
Calculate the interest earned for the first quarter of 2018.
Console.log the interest earned during the first 3 months of 2018.*/

var intRate = 0.02;
var quarterIntRate = intRate / 4;
var intEarned = newSavingsTotal * quarterIntRate;
console.log(intEarned);

/*15. Someone just hacked into the blockchain and decreased everyone's Bitcoin holding by 1. Update the quantity of your Bitcoin. 
Console.log the new Bitcoin quantity amount.*/

bitCoinQty--;
console.log(bitCoinQty);

// var worldPeace = 'Solved World Peace mother fuckers. May peace be with you or I will do it for you. Peace out V';
// console.log(worldPeace);
// ________________$$$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// __________$$$$$$____$$$$$$
// ________$$____$$____$$____$$$$
// ________$$____$$____$$____$$__$$
// $$$$$$__$$____$$____$$____$$____$$
// $$____$$$$________________$$____$$
// $$______$$______________________$$
// __$$____$$______________________$$
// ___$$$__$$______________________$$
// ____$$__________________________$$
// _____$$$________________________$$
// ______$$______________________$$$
// _______$$$____________________$$
// ________$$____________________$$
// _________$$$________________$$$
// __________$$________________$$
// __________$$$$$$$$$$$$$$$$$$$$