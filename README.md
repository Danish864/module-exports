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
  And in vs code we need json file to run the program for that you have to type : 
                                  
      npm init
  and then keep pressing enter untill a json file formed into your drive. Then go to the json file and add this line
     
     "type":"module",
  you can add it before script line start for best practice.
  
  There are many other ways available to export modules.
   
   Let's discuss now event loop example:

What is an event loop in JavaScript?
The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.

The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.
The event queue is responsible for sending new functions to the track for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.

An example of this is the setTimeout method. When a setTimeout operation is processed in the stack, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.

Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.

The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

         function eventloopexample() {
                console.log("This is the first line of code in eventloop.js.");
         function usingsetTimeout() {
                console.log("I'm going to be queued in the Event Loop.");}
         setTimeout(usingsetTimeout, 3000);
                console.log("This is the last line of code in eventloop.js.");}

In this example if our second function takes much time to load then you should start it before and when we need it . It comes on time and it saves our time.
