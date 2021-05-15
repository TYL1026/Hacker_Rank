'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vol = ['a','e','i','o','u']
    const result = []
    var repeat = 0
    for( var i = 0 ; i < s.length; i ++ ){
        repeat = 0
        vol.forEach(e => {
                if (s[i] == e && repeat == 0){
                    console.log(e)
                    repeat = 1
                }
            }
        )
        if (repeat == 0){
            result.push(s[i])
        }
    
    }
    for( var i = 0 ; i < result.length; i ++ ){
        console.log(result[i])
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
