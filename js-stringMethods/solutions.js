/*String Methods allow you to work with strings.  */  

/*Let's practice some string methods. Don't forget to console.log your results and run node REPL in the terminal.*/

/*The string.length property returns the number of characters in the string.
*/

/*1. Declare a variable named `howManyLetters` and find out how many letters are in the given string below. Console.log your result.*/

var longestPlaceName = "Taumatawhakatangihangakoauauotamateaturipukakapiki- maungahoronukupokaiwhenuakitanatahu";  //Yes, this is a real place located in Porangahau, Central Hawke's Bay.

var howManyLetters = longestPlaceName.length;
console.log(howManyLetters);

/*Next, concatenate and console.log the following phrase:
"x is the longest place name in the world and has y letters in its name."
where x represents the value at `longestPlaceName` and y represents the value at `howManyLetters`*/

console.log(longestPlaceName + " is the longest place name in the world and has " + howManyLetters + " letters in its name.");

/*The string.charAt() method returns the character at the specified index (position).*/

/*2. Declare a variable named `fifthLetter` and find out which letter is in the 5th position in the string below. Console.log your result.*/

var iDidntKnow = "The national animal of Scotland is the Unicorn";

var fifthLetter = iDidntKnow.charAt(5);
console.log(fifthLetter);

/*The indexOf() method returns the index (position) of the first occurence of a specified text in a string.*/

/*3. Declare a variable named `worldLocator` and find the index (position) of the word "world" in the string below. Console.log your result.*/

var randomFact = "All pandas in the world are on loan from China.";

var worldLocator = randomFact.indexOf("world");
console.log(worldLocator);

/*The slice() method extracts a part of a string and returns the extracted part into a new string. This method takes 2 parameters: the starting index (position) and the ending index (position)*/

/*4. Declare a new variable named `scissorHand` that will generate a new string "are afraid" from the existing string below. Console.log your result.*/

var edward = "People are afraid of me because I am different";

var scissorHand = edward.slice(6, 17);
console.log(scissorHand);

/*The replace() method replaces a specified value with another value in a string.*/

/*5. Declare a new variable named `theSifu` that will change the current string from "In order to taste my cup of water you must first fill your cup." to "In order to taste my cup of water you must first empty your cup."; Console.log your result.*/

var grasshopper = "In order to taste my cup of water you must first fill your cup.";

var theSifu = grasshopper.replace("fill", "empty");
console.log(theSifu);

/*The toLowerCase() method converts the characters in a string to lower case.*/

/*6. Declare a variable named `smallKine` that will convert the string below to all lower case. Console.log your result.*/

var bigTime = "BRUuHHHH, I AM DA GreaTest!";

var smallKine = bigTime.toLowerCase();
console.log(smallKine);

/*The toUpperCase() method converts the characters in a string to upper case.*/

/*7. Declare a variable named `bigBand` that will convert the string below to all upper case. Console.log your result.*/

var bandName = "the beatles";

var bigBand = bandName.toUpperCase();
console.log(bigBand);

/*The split() method converts a string into an array, by separating the string into substrings.*/

/*8. Declare a variable named `oreoList` that will convert the string below into an array of strings. Console.log your result.*/

var oreos = "red velvet, cookie dough, peanut butter, banana split, birthday cake";

var oreoList = oreos.split(",");
console.log(oreoList);

/*The substr() method is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. The 2 parameters: the starting index (position) and the length of the extracted part. */

/*9. Declare a variable named `favDrink` and extract "gin" from the string below. Console.log your result.*/

var drinkMenu = "rum, gin, vodka, kool-aid, haterade";

var favDrink = drinkMenu.substr(5, 3);
console.log(favDrink);




       
       

