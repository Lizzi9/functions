// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68
const celsiusToFahrenheit = (num) =>
    (num*9/5)+32;

console.log(celsiusToFahrenheit(20)) //68
// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321
  function reverseNum(num){
    let result=0;
    let lastNumber;
    while(num!=0){
    lastNumber=num%10;
    result=result*10+lastNumber;
    num = Math.floor(num/10);
    return(result);
    }
  }
    console.log(reverseNum(123)); //?????
  
// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2
function countVowel(str){
    let count = 0; 
    let vowels="aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
     if (vowels.indexOf(str[i])>-1){
        count++;
     }
    }
    return count;
}
console.log(countVowel("Lizi"));
console.log(countVowel("Hello Everyone"));

// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true
const findPalindrome  = (string) => {
    for(let i = 0; i < string.length/2; i++){
        if(string[i]!==string[string.length-1-i]){
        
        return(false);
    }
    return(true);
}
}
console.log(findPalindrome("racecar"));
console.log(findPalindrome("shdjk"));

// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10
const genRandom = (min,max) => {
    let rand = Math.floor( Math.random()*(max-min+1)+min);
    return rand;
}
console.log(genRandom(1,10))
// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120
const getFactorial = (num) =>{
    let result = num; 
    while(num>1){
        num--;
        result*=num;

    }
    return(result);
}
console.log(getFactorial(5));
console.log(getFactorial(2));


// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219
const addNumber = (...arguments) =>{
    let sum = 0;
    for(let i = 0; i<arguments.length; i++ ){
        sum+=arguments[i];
    }
    return(sum);

}
console.log(addNumber(10,45,34,130));
console.log(addNumber(34,130)) ;
console.log(addNumber(1,0)) ;