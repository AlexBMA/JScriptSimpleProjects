class Expenditures{
    constructor(type, percent){
        this.type = type;
        this.percent = percent;
    }
}

"use strict";

let data;
let expenditureArray = [];
let percentArray = [];
let colorArray = [];


function drawChart(){
    data = document.getElementById("json-data").value;
    populateArray(data);
    percentArray = createPercentArray();
    colorArray = createRandomColorArray();
    drawPie();
    
}

function populateArray(jsonData){
    let expenseArray = JSON.parse(jsonData);
    console.log(expenseArray);
    let size = expenseArray.expenditures.length;
    for(i =0;i<size;i++){
       let expense = expenseArray.expenditures[i];
       expenditureArray[i] = expense;
    }
}

function createPercentArray(){
    let perArr = [];
    let size = expenditureArray.length;
    for(i = 0; i<size;i++){
        perArr[i] = expenditureArray[i].percent * .02; 
    }
    return perArr;
}

function createRandomColorArray(){
    let randColorArr = [];
    let size = expenditureArray.length;
    for (i =0; i<size; i++){
        randColorArr[i] ='#'+Math.floor(Math.random()*16777215).toString(16);
    }
    return randColorArr;
}

function drawPie(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    let startAngle = 0;
    let endAngle = 0;
    
    let size = percentArray.length;
    
    for(i=0;i<size;i++){
        startAngle = endAngle;
        endAngle = endAngle + (percentArray[i] * Math.PI);
        
        drawSlice(context, 300, 200, 150, 
            startAngle, endAngle, colorArray[i]);
    }

}

function drawSlice(ctx, sliceCenterX, sliceCenterY, radius, 
    startAngle,endAngle, color){
       
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(sliceCenterX, sliceCenterY);
        ctx.arc(sliceCenterX, sliceCenterY, 
            radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();

}

