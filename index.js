//1. Sum to N
function sumTo(n){
    let elemSum = 0;
    for(let i = 0; i < n + 1; i++){
        elemSum += i
    }
    return elemSum
}
// console.log(sumTo(5))

//2. Task#2

function displayElements(){
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
 displayElements()

//3. Reverse string

//3.1 The first option
function reverseString(string){

    return string.split('').reverse('').join('')
}
reverseString('Ира')

//3.2 The second option
function reverseString(string){

    let reversedString = '';
    for(let i = string.length - 1; i >=0 ;i-- ){
        reversedString += string[i]
    }
    return reversedString
}
reverseString('Ира')


//4. Sum of element 

// слишком усложняешь
function mul(fn){
    return function curry(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args)
        }else{
            return function (...args2){
                return curry.apply(this,args.concat(args2))
            }
        }
    }
}

const sum = (a,b) => a + b;

let startCurry = mul(sum)

console.log(startCurry(1,2))
console.log(startCurry(1)(2))
  

//5. Palindrom

function checkForPalindrom(word){
    const changedWord =  word.split('').reverse().join('');
    return changedWord === word
}
// console.log(checkForPalindrom('tenet'));
// console.log(checkForPalindrom('abc'))

//6. Check for Anagram

// Решается через sort
function isAnagram(firstWord,secondWord){
    let arrOfLetters = [];
   if(firstWord.length === secondWord.length){
         for(let i = 0; i < firstWord.length;i++){
             if(secondWord.toLowerCase().includes(firstWord[i].toLowerCase())){
                 arrOfLetters.push(firstWord[i])
             }
         }
         return arrOfLetters.length === firstWord.length ? console.log('true') : console.log('false')
   }else{
       return console.log('false')
   }
}

// isAnagram('finder', 'Friend')
// isAnagram('friend', 'find')

//7. Fibonacci

function fibonachi(n){
  
    if(n <= 1){
        return 1
    }else{
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
// console.log(fibonachi(4))

// Почитай про кодстайл.
// В целом все неплохо
