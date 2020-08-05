//1. Sum to N
function sumTo(n){
    let elemSum = 0;
    for(let i = 0; i < n + 1; i++){
        elemSum += i
    }
    return elemSum
}
console.log(sumTo(5))

//2. Task#2

function displayElements(){
    for (var i = 0; i < 5; i++) {
            console.log(i);
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

