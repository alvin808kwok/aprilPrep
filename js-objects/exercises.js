/*
Objects in Javascript can be compared to objects in real life. Objects has a collection of properties associated with it (known as key-value pairs) and are basically the same as ordinary variables.
*/ 

//A literal object.

/*
1.  Declare a variable named `books` and create the following properties (key-value pairs to the object:
    - add a key named `title` and a string value of "The Obstacle is the Way"
    - add a key named `author` and a string value of "Ryan Holiday"
    - add a key named `category` and string value of "Self Help"
    - add a key named `pages` and number value of 200
    
    Console.log the object.
*/
    
var books = {
    title: "The Obstacle is the Way",
    author: "Ryan Holidays",
    category: "Self Help",
    pages: 200
};

console.log(books);
  
/*
2.  Declare a variable named `dog` and create the following properties (key-value pairs) to the object:
   
    - add a key named `name` and set it to a string value of your choice
    - add a key named `age` and set it to a number value of your choice
    - add a key named `vegeterian` and set it to a boolean value of your choice
    - add a key named `color` and set it to an array with two string elements in it
    - add a key named `speak` which will be a method that return a string "bark!"; 
        
 Console.log the following phrase by accessing the appropriate object properties:
 
 
 "My dog `name` is `age` year old and likes to `speak` at strangers."
*/ 

var dog = {
    name: 'Buddy',
    breed: ['Golden Retreiver', ' Border Collie'],
    age: 5,
    vegeterian: false,
    color: ['Golden', ' White'],
    speak: function(){
        return 'ruff ruff';
    }
};
//console.log('My dog ' + dog.name + ' is ' + dog.age + ' years old and likes to ' + dog.speak() + ' at strangers.');
console.log('My dog ' + dog.name + ' is a ' + dog.breed + ' mixed. ' + dog.name + ' is ' + dog.age + ' years old and has ' + dog.color + ' fur. ' + 
dog.name + ' is not vegetarian so ' + dog.name + ' will ' + dog.speak() + ' at you if you feed him vegetables.')

//An empty object

/*
3. Declare a variable named `kicks` and assign it to an EMPTY object.
   Next you will add the following properties to this object. Each property declaration expression will be on its own line and
   ending with semicolons (`;`). 
            - add a property named `brand` and set it to your favorite sneaker brand
            - add a property named `color` and set it the value "cornflower blue"
            - add a property named `size` and set it to your shoe size
            - add a property named `price` and set it to a number value between 50 to 100
            - add a property named `buy` and set it to a method that will return a string "Now I is a cool kid!"
            
  Console.log the object.
*/

// var kicks = {
//     brand: 'Nike',
//     color: 'Blue',
//     size: 12,
//     price: 80,
//     buy: function(){
//         return 'Now I is a cool kid!';
//     }
// };
// console.log(kicks);

var kicks = {};
kicks.brand = 'Nike';
kicks.color = 'Blue';
kicks.size = 12;
kicks.price = 80;
kicks.buy = function(){
    return 'Now I Gucci!';
}
console.log(kicks);
// console.log('I would like to purchase ' + kicks.brand + ' Hyperadapt bb in ' + kicks.color.toLocaleLowerCase() + ' size '+ kicks.size + '.' 
// + ' Here is my $' + kicks.price + '. ' + kicks.buy());


/* 

4. Declare a variable named `plainBox` and set its value to be an EMPTY object.
   Next, you will add three properties to this object. 
            - add a property named `color` and set it the name of any color.
            - add a property named `size` and set it to a number value between `0` and `20`.
            - add a property named `contents` and set it to be an empty array.

  console.log the object
*/

var plainBox = {};
plainBox.color = 'Buff n Blue';
plainBox.size = 20;
plainBox.contents = [];

console.log(plainBox);

/*
5. Declare a variable named `stockCar` and create the following properties (key-value pairs) to the object:
            - add a key named `model` and set its value to the name of an American car manufacturer.
            - add a key named `year` and set it to be a value above 2000 but below 2016.
            - add a key named `automaticTransmission` and give it a Boolean value of your choice.
            - add a key named `driver` and set it to be `null`.
            - add a key named `passengers` and set it to be an empty array.

    console.log the object
*/

var stockCar = {
    model: 'Toyota Prius',
    year: 2019,
    automaticTransmission: true,
    driver: null,
    passengers: [],
};
console.log(stockCar);

/*

6. Add new property inside a function
   Declare a variable named `plainPerson`. Set its value to be an EMPTY object with no properties.

   Next, declare a function named `buildPerson` and then define three parameters. The first parameter will be named `person` 
   and the second will be `nameString` and the third will be `age`. Within this function you will modify the `person` object 
   by:
            - adding a property called `name` and set its value to be the second parameter.
            - adding a property called `age` and set its value to be the third parameter.

   The function will return the first parameter.
   Finally, invoke your new function while passing in the `plainPerson` object and additional agrument values, then store 
   the return value in a variable named `completePerson`. Use `console.log` three times to print the entire object, just 
   the value at `name`, and just the value at `age`.
 */

 var plainPerson = {};

 function buildPerson(person, nameString, age){
     person.name = nameString;
     person.age = age;

     return person;
 }
 
 var completePerson = buildPerson(plainPerson, 'Buzz', 3);
 console.log(completePerson);

/*
7. Display values of objects that are inside an array
   Declare a new variable named `arrayOfObjects` and set it to be [this array of objects
   (https://gist.github.com/sgnl/958adf99007329d2e4ff).

   Declare a new function named `printOrders`and set one parameter called `orders`. Within this function you 
   will return a string that prints the order details to the page in the following format.

        Example output:
            =====
            id:  0
            purchase date:  Monday Jan 25 2015 2:01 PM
            purchase total:  279.38
            =====
            id:  1
            purchase date:  Monday Jan 27 2015 11:31 AM
            purchase total:  79.80
            =====
            id:  2
            purchase date:  Monday Feb 1 2015 7:56 AM
            purchase total:  15.62
            =====
            ...
 */

 var arrayOfObjects = [
    {
      id: 0,
      date: "Monday Jan 25 2015 2:01 PM",
      total: "279.38"
    },
    {
      id: 1,
      date: "Monday Jan 27 2015 11:31 AM",
      total: "79.80"
    },
    {
      id: 2,
      date: "Monday Feb 1 2015 7:56 AM",
      total: "15.62"
    },
    {
      id: 3,
      date: "Monday Feb 1 2015 9:43 AM",
      total: "19.83"
    },
    {
      id: 4,
      date: "Monday Feb 1 2015 11:08 PM",
      total: "56.69"
    },
    {
      id: 5,
      date: "Monday Feb 13 2015 10:22 AM",
      total: "137.92"
    },
    {
      id: 6,
      date: "Monday Feb 14 2015 6:54 PM",
      total: "938.65"
    },
    {
      id: 7,
      date: "Monday Feb 14 2015 7:17 PM",
      total: "43.77"
    },
    {
      id: 8,
      date: "Monday Feb 14 2015 7:18 PM",
      total: "28.54"
    },
    {
      id: 9,
      date: "Monday Feb 14 2015 7:18 PM",
      total: "194.33"
    }
  ];

  function printOrders(orders){
      for (i = 0; i < arrayOfObjects.length; i++){
          console.log('=====');
          console.log('id: ' + arrayOfObjects[i].id);
          console.log('date: ' + arrayOfObjects[i].date);
          console.log('total: ' + arrayOfObjects[i].total);
      }
  }
printOrders(arrayOfObjects);

/*
8. Addition with an object
   Declare a new variable named sumObj and set it to be a new object with the properties `a`, `b`, and `result`. 
   Properties 'a' and 'b' will be set to a number and result will be 'undefined.'

   Declare a new function named objectAddition. Declare the first parameter, which will be an object. Within this 
   function, you will access the values stored `a` and `b` of the object being passed in. Add the these values and store 
   the sum to this object's `result` property. This function will return the object.

        Invoke your function and pass in your object, store the result to a variable named sumObjResult and use `console.log` 
        to inspect your results.
*/

var sumObj = {
    a: 3,
    b: 6,
    result: undefined
};
function objectAddition(obj){
    obj.result = obj.a + obj.b;
    return obj;
}

var sumObjResult = objectAddition(sumObj);
console.log(sumObjResult);

/*
9. Print sum function and add as new key-value
   Declare a new function named printObj and a single parameter which will be the object from the challenge just above. 
   Within this function you are to print to the screen a message of the operation performed. For Example:

        // if this object was passed into your function:
        { a: 10, b:67, result: 77 }
        // it should print a message saying
        '10 + 67 = 77'

        Before returning this object, add a new property to it named `output` and set it to be the message that was printed 
        out.

        Invoke this function and pass in your object. Further test by changing the values of the object being passed in or 
        **create more** objects and invoke your function multiple times.
 */

 function printObj(obj){
     return obj.a + ' + ' + obj.b + ' = ' + obj.result;
 }
console.log(printObj(sumObj));

/*
10. Putting stuff in `plainBox`
        Declare a function named putInPlainBox and a single parameter which will be an object. Within this function, write a 
        FOR loop that adds **10** random number values to the array referenced at the `contents` property of the object being 
        passed in. This function will return the object.

        Invoke your function and pass in your object (which should be `plainBox`), store the result to a variable named 
        plainBoxResult and use `console.log` to inspect your results.
 */

 function putInPlainBox(obj){
     for(i = 0; i < 10; i++){
         var randomNum = Math.floor(Math.random()*10);
         obj.contents.push(randomNum);
     }
     return obj;
 }

 var plainBoxResult = putInPlainBox(plainBox);
 console.log(plainBoxResult);

/*
11. Detecting transmission
    Declare a function named detectingTransmission and a single parameter which will be an object. Within this function 
    you will check to see if the car has an automatic or manual transmission and print the results on screen.

    If `automaticTransmission` is true then print a message saying so. Also, provide an appropriate message for when the 
    its false.

    Invoke your function and pass in your stockCar object, store the result to a variable named isAutomaticTransmission and 
    use `console.log` to inspect your results.
 */

function detectingTransmission(obj){
    if(obj.automaticTransmission === true){
        return 'Automatic Transmission is on. Please drive carefully.'
    }else{
        return 'Warning! Manual Transmission has been activated. Please be ware.'
    }
}

var isAutomaticTransmission = detectingTransmission(stockCar);
console.log(isAutomaticTransmission);

/*
12.  Who's driving this thing?!
     As you may have noticed that the `stockCar` doesn't have a driver!

     Declare a function named addDriver with two parameters. The first parameter will be an object with represents a 
     **car**, the other will be a **person**. Within this function, set the `driver` value of the **stockCar** to the 
     second parameter being passed into your function.

     Invoke your function and pass in your objects, store the result to a variable named stockCarWithDriver, and inspect 
      your results. Consider using `plainPerson` as your driver.
 */

function addDriver(obj, person){
    obj.driver = person;
    return obj;
}

var stockCarWithDriver = addDriver(stockCar, plainPerson);
console.log(stockCarWithDriver);

/*
    #Final Boss
    The Dev League instructors want to ride your whip!

        Declare a variable named `passengerList` and set it to be `['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor']`

        Declare a variable named `passengerAges` and set it to be `[19, 12, 21, 22, 16, 9, 19, 20, 15]`

        Declare a function named `addPassengers` with three parameters. The first will be a **car** and the second will be an array of **names** 
        and the third will be an array of **ages**. The names and ages are in sequence, e.g. "Jon" is "19", "Jason" is "12".

        In the end you will return the **car** but within the function...

        You will have to populate the `passengers` array on the **car** object with proper objects that represent a person. 
        Currently you have two arrays, one which contains names and another which contains ages.

        You should iterate through the names and ages, pass the values to your `buildPerson` function to build person objects 
        (remember that this function returns a new object). 
        Don't forget that this function actually takes **three** arguments, how will you handle that? (you should not have to change your function).

    Example of a loaded Car:

    # Display passengers
        Delcare a function named `displayPassengers` and set one parameter which will be a **car**. This function should print out each passenger's name and age one line at a time.

    example output:
        'Jon, age 19, is riding dirty!'
        'Jason, age 12, is riding dirty!'
        'Tony, age 21, is riding dirty!'
        'Joe, age 22, is riding dirty!'
        'Jesse, age 16, is riding dirty!'
        'Nigel, age 9, is riding dirty!'
        'Kelli, age 19, is riding dirty!'
        'Marifel, age 19, is riding dirty!'
        'Victor, age 19, is riding dirty!'
 */

 var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
 var passengerAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];

 function addPassengers(car, names, ages){
     for (i = 0; i < names.length; i++){
         var newRider = {};
         buildPerson(newRider, names[i], ages[i]);
         car.passengers.push(newRider);
     }
     return car;
 }

 addPassengers(stockCar, passengerList, passengerAges);
 console.log(stockCar);