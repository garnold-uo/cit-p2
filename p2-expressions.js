/*
    CIT 281 Project 2
    Name: Garrett Arnold
*/


const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Get random string between 5 and 25
const getString = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let lengthOfOutputString = getRandomInteger(5, 26);

    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    console.log(result);
}
getString()

// Get random letter from alphabet array
const getRandomLetter = function() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let emptyArray = [];

    let letter = alphabet[Math.floor(Math.random()*alphabet.length)];
    return letter
}

// Get random string between 10 and 20
const getRandomString = function(minLength, maxLength) {
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    console.log(result);
}

getRandomString(10, 21)

// get string in ascending order
const getSortedString = (string) => string.split('').sort().join('');
console.log(getSortedString("hello world"));