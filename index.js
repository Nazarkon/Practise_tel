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
    for (var i = 0; i < 5; i++) {
            console.log(i);
    }
}
// displayElements()

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

    function  mul(a) {
        return(b) => {
            return a + b 
        }
    }
    
    // console.log(mul(1)(2),'RES')

//5. Palindrom

function checkForPalindrom(word){
    const changedWord =  word.split('').reverse().join('');
    return changedWord === word
}
// console.log(checkForPalindrom('tenet'));
// console.log(checkForPalindrom('abc'))

//6. Check for Anagram

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

isAnagram('finder', 'Friend')
isAnagram('friend', 'find')