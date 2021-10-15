// Modules are reusable pieces of code in a file that can be exported
// and then imported for use in another file.

const converters = require('./functions.js'); //imported from functions.js
const { eventloopexample } = require('./eventloop.js'); //imported from eventloop.js file

const freezingPointC = 0;
const boilingPointC = 100;
 
const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log('Freezing Point in Fahrenheit is ' + freezingPointF);
console.log('Boiling Point in Fahrenheit is ' + boilingPointF + '\n' );


console.log('Now I am importing eventloop Example , check this out \n ');
eventloopexample();