// general scope variables
const inputElement = document.getElementById("text-input");
const buttonElement = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

// function to return result if a string is a palindrome
const resultElementFunction = () => `${inputElement.value} is a palindrome`;

// function to return result if a string is not a palindrome
const notResultElementFunction = () => `${inputElement.value} is not a palindrome`;


// function to replace some character set with ""
const cleanInputString = (str) => str.replace(/[\/:\\()_,\-.!\s]/g, "").toLowerCase();


// function to reverse basic word
const reverseString = (str) => str.split('').reverse().join('');


// declare our palindrome function variable
const palindromeFunc = () => {
    const inputElementValue = inputElement.value;
    const singleCharacter = inputElementValue.trim().length;
    const cleanInput = cleanInputString(inputElementValue);

    if (inputElementValue === "") {
        alert("Please input a value");
        resultElement.innerText = "";
    } else if (singleCharacter === 1) {
        resultElement.innerText = resultElementFunction();
    } else if (cleanInput === reverseString(cleanInput)) {
        resultElement.innerText = resultElementFunction();
    } else {
        resultElement.innerText = notResultElementFunction();
    }
}

// add event listener to button
buttonElement.addEventListener("click", palindromeFunc);
