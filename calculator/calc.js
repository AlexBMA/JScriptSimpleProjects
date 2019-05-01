let preVal ="";
let newVal ="";
let resutlVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";


function numButPress(num){
    if(resutlVal){
        newVal = num;
        resutlVal = "";
    } else {
        if(num === '.'){
            if(decimalClicked != true){
                newVal +=num;
                decimalClicked = true;
            }
        } else{
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;

}

function mathButPress(operator){
    if(!resutlVal){
       preVal = newVal; 
    }else{
        preVal = resutlVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resutlVal = "";
    document.getElementById("entry").value = "";

}

function equalButPress(num){
    decimalClicked = false;
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);
    
    switch(mathOperator){
         case "+":
            resutlVal = preVal + newVal;
            break;
         case "-":
            resutlVal = preVal - newVal;
            break;
         case "*":
            resutlVal = preVal * newVal;
            break;
         case "/":
            resutlVal = preVal / newVal;
            break;
        default:
            resutlVal = newVal;
           
    }
    preVal = resutlVal;
    document.getElementById("entry").value = resutlVal;
}

function clearButPress(num){
    preVal ="";
    newVal ="";
    resutlVal = "";
    mathOperator = "";
    decimalClicked = false;

    document.getElementById("entry").value="0";

}

function copyButPress(num){
    valMemStored = document.getElementById("entry").value;

}

function pasteButPress(num){
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }

}
