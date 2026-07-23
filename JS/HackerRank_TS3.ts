'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    // 1. Ordenamos el array de menor a mayor
    arr.sort((a, b) => a - b);

    let maxFrecuencia: number = 0;
    let idGanador: number = arr[0];
    
    let contadorActual: number = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            contadorActual++;
        } else {
            if (contadorActual > maxFrecuencia) {
                maxFrecuencia = contadorActual;
                idGanador = arr[i - 1];
            }
            contadorActual = 1;
        }
    }

    if (contadorActual > maxFrecuencia) {
        idGanador = arr[arr.length - 1];
    }

    return idGanador;
}
    
    


function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arrCount: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}