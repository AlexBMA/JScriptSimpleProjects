let a1 = Array.from({length:5},(x,i)=>i);
console.log(a1);

let a2 = [...Array(5).keys()];
console.log(a2);

const range = (start, stop, step) => 
Array.from({length: (stop-start)/step+1}, (x,i)=> start+(i*step));
// 50 -10 /10 +1 = 5
// 10 + 0, 10 + 10, .... 
let a3 = range(10,50,10);
console.log(a3);

let a4 = Array.from({length:5},(x,i)=>i*i);
console.log(a4);

for(let i in a4){
    console.log(i);
}

// AccountValue = investment + their investment * the interest rate

function getAccountValue(principal, interestRate, afterYear){
    return (principal*(Math.pow(1+interestRate, afterYear))).toFixed(2);
}

