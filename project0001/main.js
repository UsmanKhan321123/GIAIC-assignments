"use strict";
//Task 2
Object.defineProperty(exports, "__esModule", { value: true });
/*Personal Message: Store a person’s name in a variable, and print a message to that person.
 Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let personName = "Eric";
console.log(`"Hello ${personName}, would you like to learn some python today??"`);
//Task 3
/*me Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
let personname = "kamran";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
let personnamee = personname.charAt(0).toUpperCase();
let personNamee = personname.slice(1, 6);
console.log(personnamee + personNamee);
//Task 4
/* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
 Your output should look something like the following, including the quotation marks: */
console.log(` Albert Einstein once said,"A person who never made a mistake never tried anything new." `);
//Task 5
/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
 Then compose your message and store it in a new variable called message. Print your message. */
let famous_person = "Albert Einstein";
let message = "'A person who never made a mistake never tried anything new.'";
console.log(famous_person + " once said, " + message);
//Task 6
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces. */
let newname = "/t  Usman/n  "; //assigned the value Usman to the string newname...
console.log(newname);
console.log(newname.trim()); //print the result..
//Task 8:
console.log(4 + 4);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Task 9
let my_fav_num = 7; //Assign the value 7 to the string my_fav_num...
console.log(`My favourite number is ${my_fav_num}`); //print the result using template literals
//Task 10
// I used comments in task no 6 and 9
//Task 11
let names = ["Rameez", "Maaz", "Saad", "Hannan", "Hamza", "Yousuf", "Taha", "Danish"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
//It can also be one by using for each loop
let names_of_friends = ["Rameez", "Maaz", "Saad", "Hannan", "Hamza", "Yousuf", "Taha", "Danish"];
names_of_friends.forEach((elements) => { console.log(elements); });
//Task 12
let Names = ["Rameez", "Maaz", "Saad", "Hannan", "Hamza", "Yousuf", "Taha", "Danish"];
console.log(`Hello ${Names[0]}!! hope you are doing good... `);
console.log(`Hello ${Names[1]}!! hope you are doing good... `);
console.log(`Hello ${Names[2]}!! hope you are doing good... `);
console.log(`Hello ${Names[3]}!! hope you are doing good... `);
console.log(`Hello ${Names[4]}!! hope you are doing good... `);
console.log(`Hello ${Names[5]}!! hope you are doing good... `);
console.log(`Hello ${Names[6]}!! hope you are doing good... `);
console.log(`Hello ${Names[7]}!! hope you are doing good... `);
//Same Task can also be done by for each loop
names.forEach((elements) => { console.log(`Hello ${elements}!! hope you are doing good... `); });
//Task 13
let fav_mod_of_transportation = ["Honda", "Toyota", "yamaha", "Kawasaki", "BMW"];
for (let a = 0; a <= fav_mod_of_transportation.length - 1; a++) {
    console.log(`I would like to have a ${fav_mod_of_transportation[a]} motorbike`);
}
//Task 14
let guest_list = ["Nabeel", "Umer", "Rameez", "Maaz", "Yousuf"];
for (let a = 0; a <= guest_list.length; a++) {
    console.log(`Hello Mr ${guest_list[a]}, lets have a dinner together!!`);
}
//Task 15
console.log(`mr ${guest_list[0]} is not coming due to some reason`);
guest_list.shift();
guest_list.unshift("Taha");
let alteres_guest_list = guest_list;
console.log(alteres_guest_list);
for (let a = 0; a <= guest_list.length; a++) {
    console.log(`Hello Mr ${guest_list[a]}, lets have a dinner together!!`);
}
//Task 16
console.log("good news friends I just found a new bigger table so can enjoy with some more friends!!!");
alteres_guest_list.unshift("Arsalan");
alteres_guest_list.splice(4, 0, "Sufyan");
alteres_guest_list.push("Ahad"); //append() method is not available here in typescript..So I used push().
alteres_guest_list.forEach((element) => {
    console.log(`I would like to invite Mr. ${element} at dinner tonight `);
});
// Task 17
console.log("I am so sorry to announce that , Due to some circumstances we can just heve two people together at dinner");
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[7]} for not inviting you today`);
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[6]} for not inviting you today`);
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[5]} for not inviting you today`);
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[4]} for not inviting you today`);
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[3]} for not inviting you today`);
alteres_guest_list.pop();
console.log(`I am so sorry Mr. ${alteres_guest_list[2]} for not inviting you today`);
console.log(alteres_guest_list);
alteres_guest_list.forEach((element) => {
    console.log(`Mr. ${element} you are still invited`);
});
alteres_guest_list.splice(0, 2);
console.log(alteres_guest_list);
//Task 18
let fav_countries = ["America", "Crotia", "Finland", "Russia", "Belgium"];
console.log(fav_countries); // Array in original form 
console.log([...fav_countries].sort()); // array in sorted order
console.log(fav_countries); // Array is still in original form
console.log([...fav_countries].sort().reverse()); //array in reverse order
console.log(fav_countries); // still array in original order
console.log([...fav_countries].reverse()); // my original array is reversed
console.log([...fav_countries].reverse().reverse()); //My original in its real form.
//Task 19
console.log(`I had invited ${alteres_guest_list.length} people at dinner`);
// Task 20
let languages = ["Urdu", "English", "French", "Italian", "Japanese"];
languages.forEach((language, index) => {
    console.log(`${index} . ${language}`);
});
//Task 21
let car = {
    company: "Toyota",
    model: 2022,
    name: "Corolla"
};
console.log(car);
// Task 22
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(Months[14]);
// Task 23
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
let month = "February";
let lowercase_month = month.toLowerCase();
let _months_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
let alienColor = "green";
if (alienColor == "green") {
    console.log("Player just earned 5 points");
}
;
if (alienColor == "yellow") {
    console.log("Player just earned 5 points");
}
// Task 26
let color_of_alien = "green";
if (color_of_alien == "green") {
    console.log(" The player justTherned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
if (color_of_alien != "green") {
    console.log(" The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Task 27
let Alien_color = "Green";
if (Alien_color == "Green") {
    console.log("The player earned 5 points.");
}
else if (Alien_color == "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
let Alien_Color = "Yellow";
if (Alien_Color == "Green") {
    console.log("The player earned 5 points.");
}
else if (Alien_Color == "Yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
let AlienColor = "Red";
if (AlienColor == "Green") {
    console.log("The player earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
//Task 28
let age = 23;
if (age < 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is adult");
}
else {
    console.log("The person is an elder");
}
//Task 29
let favourite_fruits = ["Mango", "Banana", "Apple"];
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
let usernames = ["Usman", "Umer", "admin", "Rameez", "Maaz", "Yousuf"];
for (let m = 0; m <= usernames.length - 1; m++) {
    if (usernames[m] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(` Hello ${usernames[m]}, thank you for logging in again.`);
    }
}
//Task 31
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
let current_users = ["umer", "usman", "rameez", "maaz", "yousuf"];
let new_users = ["Hamza", "maaz", "ahad", "umer", "Rafay"];
for (let _element of new_users) {
    if (current_users.includes(_element)) {
        console.log(`The user will need to enter new username`);
    }
    else
        (console.log(`${_element} is available as a username`));
}
// Task 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let a = 0; a <= 8; a++) {
    if (numbers[a] == 1) {
        console.log(`${numbers[a]}st`);
    }
    else if (numbers[a] == 2) {
        console.log(`${numbers[a]}nd`);
    }
    else if (numbers[a] == 3) {
        console.log(`${numbers[a]}rd`);
    }
    else {
        console.log(`${numbers[a]}th`);
    }
}
// Task 34
let pizza = ["Pepperoni Pizza", "Margherita Pizza", "Neapolitan Pizza"];
for (let a = 0; a <= 2; a++) {
    console.log(`I like ${pizza[a]}`);
}
console.log("I really lie pizza");
//Task 35
let pet_animals = ["Dog", "Horse", "Pigeon"];
for (let a = 0; a <= 2; a++) {
    console.log(pet_animals[a]);
}
for (let a = 0; a <= 2; a++) {
    console.log(`A ${pet_animals[a]} would be a great pet`);
}
console.log("All these animals are loyal and sincere to their master.");
//Task 36
function make_shirt(size, text) {
    console.log(`The of the shirt is ${size} and the text printed on shirt is ${text} `);
}
make_shirt(6, "Code , eat , gym , repeat");
//Task 37
function anysize_Shirt(Text, Size = "size") {
    console.log(Size = "Anysize", Text);
}
anysize_Shirt("Eat,Sleep,Code,trade and repeat");
function large_Shirt(Size = "large", Text = "I Love Typescript") {
    console.log(Size, Text);
}
large_Shirt();
function medium_Shirt(Size = "medium", Text = "I Love Typescript") {
    console.log(Size, Text);
}
medium_Shirt();
// Task 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("Lahore");
describe_city("London", "England");
//Task 39
function city_country(city, country) {
    return city + "," + country;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("London", "England"));
console.log(city_country("Trieste", "Italy"));
//Task 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in 
// an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. 
//  Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//   Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, album_title, tracks) {
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
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
let magicians = ["Darren Brown", "Harry Houdini", "David Blaine"];
function show_magician() {
    for (let elements of magicians) {
        console.log(elements);
    }
}
show_magician();
//Task 42
//Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
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
// Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
console.log(magicians);
// console.log(make_great())
// Task 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function sandwitch_items(...items) {
    let ingredients_of_sandwitch = "The ingredients of sandwitch are : " + items;
    return ingredients_of_sandwitch;
}
console.log(sandwitch_items("Tomato", "Ketchup", "Chicken patty", "Mayonese", "Hot sauce"));
console.log(sandwitch_items("Tomato", "Ketchup", "Beef patty", "mustard paste", "Hot sauce", "Hari chatni"));
console.log(sandwitch_items("Tomato", "Ketchup", "chicken", "Mayonese"));
//Task 45 Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//Print the Object that’s returned to make sure all the information was stored correctly.
function car_information(manufacturer, model_name, ...qualities) {
    let car_details = {
        manufacturer: manufacturer,
        model_name: model_name,
        color: qualities,
        no_on_plate: qualities
    };
    return car_details;
}
console.log(car_information("Mercedes", "2022", "black", 30335, "Pakistan"));
