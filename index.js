console.log('Hello')


//1. Sum to N
function sumTo(n){
    let elemSum = 0;
    for(let i = 0; i < n + 1; i++){
        elemSum += i
    }
    return elemSum
}
console.log(sumTo(5))

