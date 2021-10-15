module.exports = {eventloopexample} ;
function eventloopexample() {

    console.log("This is the first line of code in eventloop.js.");
 
function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);
 
console.log("This is the last line of code in eventloop.js.");

}






// console.log("This is an ");
// setTimeout(() => { console.log("Event Loop");}, 2000);
// console.log("example of");
