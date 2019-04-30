// Pi = 4/1 - 4/3 + 4/5 - 4/7..

function calcPI(iterations){
    const piVal = 3.14159;

    let pi = 0, divisor  = 1;

    for(i =0;i<iterations;i++){
        pi = pi+ (4/divisor)- (4/(divisor+2));

        divisor  = divisor + 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);

}

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

function getFibList(iterations){
    let first =1, secound=1;
    let fib =0;
    
    let fibList = [];
    fibList.push(first);
    fibList.push(secound)

    for(i=0;i<=iterations;i++){
        fib = first+secound;
        first = secound;
        secound = fib;
        fibList.push(fib);
    }
    document.getElementById("output1").value = fibList.join(", ");
}


let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll  ~ forever \n 2.He who ~ at the right time can again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your to wipe your ~ Always have a clean with you";

// Convert string into an array 
let mLArray = mLText.split(" ");
// Create araay for user input
let inputArray = [];

function madLibGenerator(){

    createInputArray();
    if(checkForMissingInput()){
        document.getElementById("output1").value = "Enter all values above";
    } else{
        createMLSentence();
    }
}

function createInputArray(){
    for(i = 0;i<=13;i++){
        inputArray[i] = document.getElementById("i"+i).value; 
    }    
}

function checkForMissingInput(){
    let defaultArraysVals = ["Parson","Noun", "Verb","Adjective","Plural Verb","Body Part","Event"];
    let size =inputArray.length; 
    for(i=0;i<size;i++){
        if(defaultArraysVals.indexOf(inputArray[i]>-1)){
            console.log(inputArray[i]);
            debugger;
            return true;
        }
    }
    return false;
}

function createMLSentence(){
    let arrIndex = 0;
    let size = mLArray.length;
    for(i=0;i<size;i++){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }

    document.getElementById("output1").value =mLArray.join(" ");
}