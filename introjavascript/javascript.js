// const = constant doesnt change 
// let = changes inside the scope its in  
// var = 

// const maxHealth = 100;
// var currentHealth = 50;
// currentHealth = 40.5;
// currentHealth = maxHealth;
// var numberOfLives = 3;
// function something() {
// }

// if (true) {
//     var isGameOver = false;
// }
// console.log(isGameOver);

// var isGameOVer = false;
// isGameover = true;
// var isAtEnd = false;

// var characterName = "Nimish";
// characterName = "Zenva";
// var age = 30;
// let message = 
// `Hi, my name is ${characterName} and my age is ${age}`;
// let length = characterName.length;
// let upperName = characterName.toUpperCase(); //this doesnt change original 
// let lowerName = characterName.toLowerCase(); //this doesnt change original
// characterName = characterName.toLowerCase(); //this changes the var

// let zen = characterName.slice(0,3); //returns zen


// currentLevel

// var health = 50;

// + - * / % **

// health = health + 10; //60
// health = health - 10; //50
// health = health % 2 == 0; //true
// health = health ** 2; //2500

// += -= *= /+

// health -= 20; health = health - 20;
// health += 20; health = health + 20;

// health ++; health = health + 1;
// health --; health = health - 1;

// Please
// Parentheses first
// Excuse
// Exponents (ie Powers and Square Roots, etc.)
// My Dear
// Multiplication and Division (left-to-right)
// Aunt Sally 
// Addition and Subtraction (left-to-right)

// health = (health * 2) + (health / 5);

//three ways to increase health by 1
// health ++;
// health = health + 1;
// health += 1;

// var hello = "Hello";
// var world = "world";
// var result = hello + world;
// print(result);

// conditional operator > >= < <= == != ===
// var number1 = 5
// var number2 = 10
// var result = number1 > number2; //false greater than
// var result = number1 < number2; //true less than
// var result = number1 == number2; //false
// var result = number1 != number2; //true

// var string1 = "hello";
// var string2 = "world";
// result = string1 == string2; false

// Logical operator
// ! (not operator makes true false and false true)
// || (or operator only one in the series returns true is true)
// && (and operator all have to return true to be true)
// result = !result; //true
// result = number1 > number2 && string1 == string2; //false

// ternary operator ? : 
// number1 = number2;
// result = number1 > number2 ? number1 : number2; // false so it returns number2
// result = number1 == number2 ? number1 : number2; //  true so it returns number1

// check the number of lives to continue game
// var isGameOver = !(numberOfLives > 0)

// // Array
// var inventoy = ["shirt", "axe", "bread"];
// // example inventory = ["water", "pants"];
// let shirt = inventory[0]; //shirt
// inventory[2] = "cheese"; // replaces bread with cheese
// inventory.length  //3
// length = inventory[0].length //5 shirt has 5 characters
// inventory.push("water"); // ["shirt", "axe", "cheese", "water"] adds to end
// var water = inventory.pop(); // ["water"] 

// //Multiple dimensional arrays
// var levels = [
//     [1.1, 1.2, 1.3],
//     [2.1, 2.2, 2.3, 2.4],
//     [3.1, 3.2, 3.3],
// ];

// var firstWorld = levels[0]; //[1.1, 1.2, 1.3]
// var firstLevel = levels[0][1]; // [1.2]
// firstLevel[0][3] = 1.4; //  

// levels[1].pop(); // removes 2.4 from array
// levels[2].push(3.3) // new array is [3.1, 3.2, 3.3]

//Functions
// function name (input) {
//     function body/code
//     return
// }

// var currentHealth = 50;
// var healAmount = 10;

// function heal() {
//     currentHealth += healAmount;
// }

// //nested functions
// function heal() {
//     currentHealth += healAmount;
//     function nested() {
//         code
//     }
// }

// heal(); // currentHealth = 60

// var func = function heal() {
//     currentHealth += healAmount;
// }

// var currentHealth = 50
// var maxHealth = 100
// function currentHealth(healAmount = 10) {
//     var newHealth = currentHealth + healAmount;
//     currentHealth = newHealth > 100 ? maxHealth : newHealth;
//     return (currentHealth / maxHealth) * 100;
//     }
// var result = heal(); //currentHealth = 60, result = 60
// heal(50); //currentHealth = 100 result = 100

// function calculatePercent (dividen, divisor) {
//     return (dividen / divisor) * 100;
// }

// if statements

// if (input) {
//     code to run if true
// }

// var keyPressed = "l";
// var xPos = 0;
//let endPos = 5;

// if (keyPressed == "r" && xPos <endPos) {
//     xPos += 1; 
// }

// if (keyPressed == "r") {
//     xPos -= 1; // false no change
// }

// var keyPressed = "l"
// var xPos = 0;
// if (keyPressed == "l") {
//     xPos -= 1;
// } else if (keyPressed == "r") {
//     xPos += 1;
// } else {
//     xPos = 0;
// }

//while loop

// let endPos = 5
// var xPos = 0
// var enemyPos = 4;
// var isGameOver = false;

// while (!isGameOver) {
//     xPos++;
//     if (xPos >= endPos || xPos == enemyPos) {
//         isGameOver = true;
//     }
// }    

// while(pos < endPos) {
//     pos ++;
// }

// Controll Statements 
// Break, Return, Continue

// while(xPos < endPos) {
//     if (xPos % 2 == 1) {
//         xPos += 2;
//         continue;
//     }
//         xPos++;
//     if (xPos == enemyPos) {
//         break;
//     }
// }

// function movePlayer() {
//     while(xPos < endPos) {
//         xPos++;
//         if (Xpos == enemyPos) {
//             return;
//         }
//     }
// }

// For loops
// var items = ["Axe", "Shirt", "Knife"];
// var finalString = "In my inventory, I have "

// for(var i = 0; i < items.length; i++) {
//     var itemName = items[i];
//     finalString += itemName + " ";
// }

// var items = ["Axe", "Shirt", "Knife"];
// var finalString = "In my inventory, I have "
// items.forEach(function(element) {
//     finalString += element + " ";
// });

// Objects collection of name : value pairs (similar to dict)

// var gameCharacter = {
//     name: "Nimish",
//     xPos: 0, 
//     items: ["Knife", "Food"],
//     move: function(x) {
//         this.xPos += x;
//     }
// };

// var name = gameCharacter.name;
// var name = gameCharacter['name'];
// gameCharacter.items = ["Axe", "Bread"];
// gameCharacter.move(5);
// var x = gameCharacter.xPos; // returns 5
// gameCharacter.yPos = 0;
// gameCharacter,move = function(x,y) {
//     this.xPos += x;
//     this.yPos += y;
// };

// var gameCharacter = {
//     name: "Nimish",
//     class: "Human",
//     health: 100,
//     get title() {
//         return this.name + "the" + this.class  
// },
//     set maxHealth(h) {
//         this.health = h;
// },
//     xPos: 0, 
//     items: ["Knife", "Food"],
//     move: function(x) {
//         this.xPos += x;
//     }
// };

//gameCharacter.title; // "Nimish the human"
//gameCharacter,maxHealth =150; //health = 150;
// var health = gameCharacter.maxHealth; //undefined
// var i = 5;
// var j = i;
// i = 10; // i =10, j = 5
// var gc = gameCharacter;
// gc.name = "new name"; 
//gameCharacter.name = "new name", gc.name = "new name";

//prototype
// function gameCharacter(name, xPos, health) {
//     this.name = name;
//     this.xPos = xPos;
//     this.health = health;
//     this.move = function(x) {
//         this,xPos += x;
//     }
//     this.class = "Human";
// }

// var gc1 = new gameCharacter("Nimish", 0, 100);
// var name = gc1.name;
// gc1,health = 150;
// gc1.move(10);
// var gc1 = new gameCharacter("Zenva", 5, 150);
// gameCharacter.prototype.class = "Human";
// gc2.class; //Human

// var heal() = function(amount) {
//     this.health += amount;
// }

// gameCharacter.prototype.heal = heal;
// gc1.heal(5);
// gc2.heal(10);


