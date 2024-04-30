//Al usar setTimeout se usan milisegundos

let userTime = prompt("How much -mili-seconds do you need? (5s = 5000ms)");
let timeOut = userTime.split();


setTimeout(() => {
    alert("The time have passed");
}, timeOut);