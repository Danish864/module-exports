import { area , celsiusToFahrenheit } from './es6-function.js';

const freezingPointC = 0;
const boilingPointC = 100;
 
const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

console.log('Freezing Point in Fahrenheit is ' + freezingPointF);
console.log('Boiling Point in Fahrenheit is ' + boilingPointF);

console.log('The area of a square with sides of length 5 is ' + area(5));