/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and 
replace the n/a with the following:

Tay-Tay*/

name1.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and 
replace the n/a with the following: 

Project Manager*/

position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and 
replace the n/a with a verse from your favorite Prince song.*/

var profileElem = document.getElementsByClassName('profile');
profileElem[0].innerHTML = '"Greatest Ever"';

/*5. Bruce Lee

Find the div with the class name of "profile" and 
replace the n/a with a quote from the legend himself.*/

var profileElem = document.getElementsByClassName('profile');
profileElem[1].innerHTML = '"A wise man can learn more from a foolish question than a fool can from a wiseman."'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and 
replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem = document.getElementsByClassName('alias');
aliasElem[2].innerHTML = 'Coach Carter';

/*7. David Ige

Create a div element and give it an id of "name7". 
Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var nameElem = document.createElement('div');
nameElem.id = 'name7';
nameElem.innerHTML = 'David Ige';
nameParent.appendChild(nameElem);

/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". 
Inside this div element, give it the contents of 
"Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var aliasElem = document.createElement('div');
aliasElem.id = 'alias8';
aliasElem.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(aliasElem);

//Final Boss
/*9. Create your own profile.*/

// var imgBox = document.createElement('img');
// imgBox.id = 'image';
// imgBox.src = 'assets/kobeBryant.jpg';
// document.body.appendChild(imgBox);

var imgBox = document.getElementsByTagName('img');
console.log(imgBox);
imgBox[8].src = 'assets/kobeBryant.jpg';

var nameElem = document.createElement('div');
nameElem.id = 'name9';
nameElem.innerHTML = 'Kobe Bryant';
var divElem = document.getElementsByClassName('block3');
divElem[2].appendChild(nameElem);

var positionElem = document.createElement('div');
positionElem.id = 'position9';
positionElem.innerHTML = 'NBA Legend';
var divElem = document.getElementsByClassName('block3');
divElem[2].appendChild(positionElem);

var aliasElem = document.createElement('div');
aliasElem.id = 'alias9'
aliasElem.innerHTML = 'The Black Mamba';
var divElem = document.getElementsByClassName('block3');
divElem[2].appendChild(aliasElem);

var bioElem = document.createElement('div');
bioElem.id = 'bio9';
bioElem.innerHTML = '"5 Rings" 💍💍💍💍💍';
var divElem = document.getElementsByClassName('block3');
divElem[2].appendChild(bioElem);
