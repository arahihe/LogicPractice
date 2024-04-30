const userData = prompt("Write a number to factorize");
const num = parseInt(userData);
function factor(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * factor(num -1));
    }
}

if (Number.isNaN(num)) {
    alert("Not a number");
}
else {
    console.log(factor(num));
}
