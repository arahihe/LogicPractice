let  input = prompt("write a word or a sentence to know if it's a palindrome");

const isPalindrome = (stringToCheck) => {

    stringToCheck = stringToCheck.replace(/[^a-z]/g, '').split('');

    const palindrome = stringToCheck.toReversed();

    for (let index = 0; index <= palindrome.length; index++) {
        if(palindrome[index] != stringToCheck[index]) {
            return false;
        }
    }
    return true;
}

alert(isPalindrome(input));