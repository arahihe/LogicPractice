let userNumbers = [];

userNumbers = prompt("Please, write 10 numbers (use comma [,] to separate numbers)");

let numeros = userNumbers.split(",").map(Number);

let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maximo){
        maximo = numeros[i];
    }
}

console.log("The highest number is: " + maximo);
