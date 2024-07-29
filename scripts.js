
document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultElement = document.getElementById('result');

    function isPalindrome(str) {
        // Normalize the string: remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    checkButton.addEventListener('click', () => {
        const inputText = textInput.value.trim();
        
        if (inputText === '') {
            resultElement.textContent = "Please input a value";
        } else if (isPalindrome(inputText)) {
            resultElement.textContent = `"${inputText}" is a palindrome`;
            textInput.value = '';
        } else {
            resultElement.textContent = `"${inputText}" is not a palindrome`;
            textInput.value = '';
        }
    });
});


// // select Html elements!
// const checkBtn = document.querySelector("#check-btn");
// const textInput = document.querySelector("#text-input");
// const result = document.querySelector("#result");

// checkBtn.addEventListener("click", () => {
//     const inputValue = textInput.value.trim();
   
//     if (inputValue === '') {
//         alert("Please input a value");
//     } else if (isPalindrome(inputValue)) {
//         result.innerHTML = `<span class="bold-text">${inputValue}</span> is a palindrome`;
//     } else {
//         result.innerHTML = inputValue.bold() + " is not a palindrome";
//     }
//     // "A is a palindrome".
// });

// function isPalindrome(str) { //eye//eye
//     // str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
//     //  str.replace(/[\W_]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }