'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let espacios = " ".repeat(n - i);
        
        let almohadillas = "#".repeat(i);
        
        console.log(espacios + almohadillas);
    }
}





function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}