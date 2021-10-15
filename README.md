# module-exports with event loop example
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.
A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

#This repo is about module exports in node and javascript es6 environments with event loop function.
In Node environment in vs code we can export our function by using this expression
                  module.exports = { functionName };
  
  we can export as many funtions as we want by specifying in curly brackets and add comma between them .
  
  
  for importing into required program we use 'require' keyword . for example
                  const converters = require('./functions.js');
                  converters.functionName();
                  
  we can import functions from more than one files to required file.
  
  
Now let's see javascript-es6 runtime environment in vs-code
  
 for javascript we can export our functions by this expression
         
          export { functionName };
 
 you can export function where it's declared by adding export in start of function, let's see example:
      export function area(side) {
      return side * side; }
  
  for importing we use 'import' and 'from expression. let's see an example,
  
      import { functionName1 , functionName2 } from './es6-function.js';
      functionName1(); //for invoking function
      
  There are many other ways available to export modules.
   
   Let's discuss now event loop example;
  
