let userName = prompt("What's your name?");
let userAge = prompt("What's your age? (please, write it with numbers)");
let userFilms = prompt("Wich are your favorite films?")

let filmes = userFilms.split(",");

console.log("My name is " + userName + " and I have " + userAge + " years old.");
console.log(filmes[0] + " is my favorite movie");