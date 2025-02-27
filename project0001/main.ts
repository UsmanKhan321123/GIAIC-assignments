//Task 2

import { log } from "console";
/*Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/

let personName: string = "Eric";
console.log(
  `"Hello ${personName}, would you like to learn some python today??"`
);

//Task 3
/*me Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let personname: string = "kamran";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
let personnamee: string = personname.charAt(0).toUpperCase();
let personNamee: string = personname.slice(1, 6);
console.log(personnamee + personNamee);

//Task 4

/* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
 Your output should look something like the following, including the quotation marks: */

console.log(
  ` Albert Einstein once said,"A person who never made a mistake never tried anything new." `
);

//Task 5

/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
 Then compose your message and store it in a new variable called message. Print your message. */

let famous_person: string = "Albert Einstein";
let message: string =
  "'A person who never made a mistake never tried anything new.'";
console.log(famous_person + " once said, " + message);

//Task 6
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

let newname: string = "\t  Usman\n  "; //assigned the value Usman to the string newname...
console.log(newname); //print the name with ...
console.log(newname.trim()); //print the name eithou whitespaces..

//Task 8:

/* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 Be sure to enclose your operations in print statements to see the results. */

console.log(4 + 4);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//Task 9
/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
  just add your name and the current date at the top of each program file.
  Then write one sentence describing what the program does. */

let my_fav_num: number = 7; //Assign the value 7 to the string variablr my_fav_num...
console.log(`My favourite number is ${my_fav_num}`); //print the result using template literals

//Task 10

// I used comments in task no 6 and 9

//Task 11
/* Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time. */

let names: string[] = [
  "Rameez",
  "Maaz",
  "Saad",
  "Hannan",
  "Hamza",
  "Yousuf",
  "Taha",
  "Danish",
];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);

//Task 12

/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with the person’s name. */

let Names: string[] = [
  "Rameez",
  "Maaz",
  "Saad",
  "Hannan",
  "Hamza",
  "Yousuf",
  "Taha",
  "Danish",
];
console.log(`Hello ${Names[0]}!! hope you are doing good... `);
console.log(`Hello ${Names[1]}!! hope you are doing good... `);
console.log(`Hello ${Names[2]}!! hope you are doing good... `);
console.log(`Hello ${Names[3]}!! hope you are doing good... `);
console.log(`Hello ${Names[4]}!! hope you are doing good... `);
console.log(`Hello ${Names[5]}!! hope you are doing good... `);
console.log(`Hello ${Names[6]}!! hope you are doing good... `);
console.log(`Hello ${Names[7]}!! hope you are doing good... `);

//Task 13

/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
  such as “I would like to own a Honda motorcycle.”
*/

let fav_mod_of_transportation: string[] = [
  "Honda",
  "Toyota",
  "yamaha",
  "Kawasaki",
  "BMW",
];
for (let a = 0; a <= fav_mod_of_transportation.length - 1; a++) {
  console.log(
    `I would like to have a ${fav_mod_of_transportation[a]} motorbike`
  );
}

//Task 14
/* Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner. */

let guest_list: string[] = ["Nabeel", "Umer", "Rameez", "Maaz", "Yousuf"];
for (let a = 0; a <= guest_list.length; a++) {
  console.log(`Hello Mr ${guest_list[a]}, lets have a dinner together!!`);
}

//Task 15
/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
 
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/

console.log(`mr ${guest_list[0]} is not coming due to some reason`);
guest_list.shift();
guest_list.unshift("Taha");
let alteres_guest_list: string[] = guest_list;
console.log(alteres_guest_list);
for (let a = 0; a <= guest_list.length; a++) {
  console.log(`Hello Mr ${guest_list[a]}, lets have a dinner together!!`);
}
//Task 16

/* More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list. */

console.log(
  "good news friends I just found a new bigger table so can enjoy with three more friends!!!"
);
alteres_guest_list.unshift("Arsalan");
alteres_guest_list.splice(4, 0, "Sufyan");
alteres_guest_list.push("Ahad"); //append() method is not available here in typescript..So I used push().
alteres_guest_list.forEach((element: string) => {
  console.log(`I would like to invite Mr. ${element} at dinner tonight `);
});

// Task 17

/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

console.log(
  "I am so sorry to announce that , Due to some circumstances we can just heve two people together at dinner"
);
alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[7]} for not inviting you today`
);
alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[6]} for not inviting you today`
);

alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[5]} for not inviting you today`
);

alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[4]} for not inviting you today`
);

alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[3]} for not inviting you today`
);

alteres_guest_list.pop();
console.log(
  `I am so sorry Mr. ${alteres_guest_list[2]} for not inviting you today`
);

console.log(alteres_guest_list);
alteres_guest_list.forEach((element) => {
  console.log(`Mr. ${element} you are still invited`);
});
alteres_guest_list.splice(0, 2);
console.log(alteres_guest_list);

//Task 18

/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 */

let fav_countries: string[] = [
  "America",
  "Crotia",
  "Finland",
  "Russia",
  "Belgium",
];
console.log(fav_countries); // Array in original form
console.log([...fav_countries].sort()); // array in sorted order
console.log(fav_countries); // Array is still in original form
console.log([...fav_countries].sort().reverse()); //array in reverse order
console.log(fav_countries); // still array in original order
console.log([...fav_countries].reverse()); // my original array is reversed
console.log([...fav_countries].reverse().reverse()); //My original in its real form.

//Task 19

/* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner. */

console.log(`I had invited ${alteres_guest_list.length} people at dinner`);

// Task 20

/* Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
 cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */

let _language_: string = "English,Urdu,French,Italian,Japanese";
let listed_elements: string[] = _language_.split(",");
console.log(listed_elements);

//Task 21

/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

let car: { company: string; model: number; name: string } = {
  company: "Toyota",
  model: 2022,
  name: "Corolla",
};

console.log(car);

// it can also be done by using JSON.parse()

let cars: string = '{"company":"Toyota","model":"2022","name":"Corolla"}';
let cars_object = JSON.parse(cars);
console.log(cars_object);

// Task 22

/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */

let Months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(Months[14]);

// Task 23

/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
 Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

 */
let months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[1] == "april");
console.log(months[0] == "January");
console.log(months[1] == "March");
console.log(months[4] == "May");
console.log(months[2] == "May");
console.log(months[4] == "May");
console.log(months[2] == "July");
console.log(months[2] == "March");
console.log(months[5] == "October");
console.log(months[5] == "June");

//Task 24

/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

 */

let month: string = "February";
let lowercase_month: string = month.toLowerCase();
let _months_: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(month[1] == "e");
console.log(month[1] == "f");
console.log(month[1] !== "r");
console.log(month[1] !== "e");
console.log(lowercase_month == month);
console.log(1 == 1);
console.log(1 != 1);
console.log(2 > 1);
console.log(4 < 2);
console.log(2 >= 2);
console.log(46 <= 15);
console.log(34 > 30 && 20 < 34);
console.log(34 > 33 || 20 > 34);
console.log(_months_[0] == "January");
console.log(_months_[3] == "march");

//Task 25
/* Alien Colors #1: Imagine an alien was just shot down in a game.
 Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green.
If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

 */

let alienColor: string = "green";
if (alienColor == "green") {
  console.log("Player just earned 5 points");
}

if (alienColor == "yellow") {
  console.log("Player just earned 5 points");
}

// Task 26

/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */

let color_of_alien: string = "green";
if (color_of_alien == "green") {
  console.log(" The player justTherned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

if (color_of_alien != "green") {
  console.log(" The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

// Task 27

/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

let Alien_color: string = "Green";
if (Alien_color == "Green") {
  console.log("The player earned 5 points.");
} else if (Alien_color == "yellow") {
  console.log("The player earned 10 points.");
} else {
  console.log("The player earned 15 points.");
}

let Alien_Color: string = "Yellow";
if (Alien_Color == "Green") {
  console.log("The player earned 5 points.");
} else if (Alien_Color == "Yellow") {
  console.log("The player earned 10 points.");
} else {
  console.log("The player earned 15 points.");
}

let AlienColor: string = "Red";
if (AlienColor == "Green") {
  console.log("The player earned 5 points.");
} else if (AlienColor == "yellow") {
  console.log("The player earned 10 points.");
} else {
  console.log("The player earned 15 points.");
}

//Task 28

/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
 and then:

 • If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

let age: number = 23;
if (age < 2) {
  console.log("The person is baby");
} else if (age >= 2 && age < 4) {
  console.log("The person is toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person is kid");
} else if (age >= 13 && age < 20) {
  console.log("The person is teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person is adult");
} else {
  console.log("The person is an elder");
}

//Task 29
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let favourite_fruits: string[] = ["Mango", "Banana", "Apple"];

if (favourite_fruits.includes("Mango")) {
  console.log("I like Mango");
}
if (favourite_fruits.includes("Peach")) {
  console.log("I like Peach");
}
if (favourite_fruits.includes("Banana")) {
  console.log("I like Banana");
}

if (favourite_fruits.includes("Guava")) {
  console.log("I like Guava");
}

if (favourite_fruits.includes("Apple")) {
  console.log("I like Apple");
}

//Task 30

/* Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let usernames: string[] = [
  "Usman",
  "Umer",
  "admin",
  "Rameez",
  "Maaz",
  "Yousuf",
];
for (let m = 0; m <= usernames.length - 1; m++) {
  if (usernames[m] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(` Hello ${usernames[m]}, thank you for logging in again.`);
  }
}

//Task 31

/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

if (usernames.length == 0) {
  console.log("We need to find some users");
}
console.log(usernames.length); //here yhe length of the list is 6
usernames.splice(0, 6);
console.log(usernames.length); // here the length of list is 0
if (usernames.length == 0) {
  console.log("We need to find some users");
}

//   Task 32

/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

 */

let current_users: string[] = ["umer", "usman", "rameez", "maaz", "yousuf"];
let new_users: string[] = ["Hamza", "Rafay", "ahad", "umer", "maaz"];

for (let _element of new_users) {
  if (current_users.includes(_element)) {
    console.log(
      `The user will need to enter new username as ${_element} is also present in the current_users`
    );
  } else console.log(`${_element} is available as a username`);
}

// Task 33

/* Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let a = 0; a <= 8; a++) {
  if (numbers[a] == 1) {
    console.log(`${numbers[a]}st`);
  } else if (numbers[a] == 2) {
    console.log(`${numbers[a]}nd`);
  } else if (numbers[a] == 3) {
    console.log(`${numbers[a]}rd`);
  } else {
    console.log(`${numbers[a]}th`);
  }
}
// Task 34

/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let pizza: string[] = [
  "Pepperoni Pizza",
  "Margherita Pizza",
  "Neapolitan Pizza",
];

for (let b = 0; b <= pizza.length; b++) {
  console.log(pizza[b]);
}
for (let a = 0; a <= 2; a++) {
  console.log(`I like ${pizza[a]}`);
}
console.log("I really like pizza");

//Task 35

/* Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet! */

let pet_animals: string[] = ["Dog", "Horse", "Pigeon"];
for (let a = 0; a <= 2; a++) {
  console.log(pet_animals[a]);
}
for (let a = 0; a <= 2; a++) {
  console.log(`A ${pet_animals[a]} would be a great pet`);
}
console.log("All these animals are loyal and sincere to their master.");

//Task 36
/*
 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

function make_shirt(size: number, text: string) {
  console.log(
    `The of the shirt is ${size} and the text printed on shirt is ${text} `
  );
}

make_shirt(6, "Eat , Code , Gym , Repeat");

//Task 37

/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_Shirt(
  size: string = "large",
  text: string = "Eat,Sleep,Code,trade and repeat"
) {
  console.log(size, text);
}
make_Shirt();
function anysize_Shirt(Text: string, Size: string = "size") {
  console.log((Size = "Anysize"), Text);
}
anysize_Shirt("Eat,Sleep,Code,trade and repeat");

function large_Shirt(
  Size: string = "large",
  Text: string = "I Love Typescript"
) {
  console.log(Size, Text);
}
large_Shirt();
function medium_Shirt(Size = "medium", Text = "I Love Typescript") {
  console.log(Size, Text);
}
medium_Shirt();

// Task 38
/* Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
  Call your function for three different cities, at least one of which is not in the default country.

 */

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}`);
}

describe_city("karachi");
describe_city("Lahore");
describe_city("London", "England");

//Task 39
/* City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.

 */

function city_country(city: string, country: string): string {
  let v: string = `"${city}, ${country}"`;
  return v;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("London", "England"));
console.log(city_country("Trieste", "Italy"));

//Task 40

/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in
an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/

function make_album(artist: string, album_title: string, tracks?: any) {
  let album = {
    name_of_artist: artist,
    Album_title: album_title,
  };

  return album;
}
const album1 = make_album("abc", "xxyz");
const album2 = make_album("def", "jkl");
const album3 = make_album("ghi", "mno");
const album4 = make_album("pqr", "stu", 5);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

//Task 41

/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/

let magicians: string[] = ["Darren Brown", "Harry Houdini", "David Blaine"];
function show_magician() {
  for (let elements of magicians) {
    console.log(elements);
  }
}

show_magician();

//Task 42

/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/

function make_great() {
  for (let a = 0; a <= 2; a++) {
    let inserted_elements = "The great " + magicians[a];
    magicians.push(inserted_elements);
  }
  magicians.splice(0, 3);
  return magicians;
}

console.log(make_great());
console.log(magicians);
show_magician();

//Task 43

/* Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

console.log(magicians);
// console.log(make_great())

// Task 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.

function sandwitch_items(...items: any[]) {
  let ingredients_of_sandwitch: string =
    "The ingredients of sandwitch are : " + items;

  return ingredients_of_sandwitch;
}
console.log(
  sandwitch_items("Tomato", "Ketchup", "Chicken patty", "Mayonese", "Hot sauce")
);
console.log(
  sandwitch_items(
    "Tomato",
    "Ketchup",
    "Beef patty",
    "mustard paste",
    "Hot sauce",
    "Hari chatni"
  )
);
console.log(sandwitch_items("Tomato", "Ketchup", "chicken", "Mayonese"));

//Task 45 Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//Print the Object that’s returned to make sure all the information was stored correctly.

function car_information(
  manufacturer: string,
  model_name: string,
  ...qualities: any
) {
  let car_details = {
    manufacturer: manufacturer,
    model_name: model_name,
    color: qualities,
    no_on_plate: qualities,
  };
  return car_details;
}

console.log(car_information("Mercedes", "2022", "black", 30335, "Pakistan"));
