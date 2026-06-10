'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


  Complete the 'timeConversion' function below.
 
  The function is expected to return a STRING.
  The function accepts STRING s as parameter.
 

function timeConversion(s) {

let horaNueva = Number(s.slice(0, 2));
let minSeg = s.slice(2, 8);
let letras = ;
if(s.endsWith(PM)){
    if(horaNueva === 12){
        horaNueva = 12
    } else{
    horaNueva = horaNueva+12
    }
}else if (s.endsWith(AM)){
    if(horaNueva===12){
        horaNueva = 0;
    }
}
if(horaNueva10){
   horaNueva= 0+horaNueva
}
return horaNueva+minSeg


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + 'n');

    ws.end();
}
