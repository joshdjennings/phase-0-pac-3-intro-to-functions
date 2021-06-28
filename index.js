// Follow along with the examples here
function sayHello() {
    console.log('Hello!');
}
 
function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
} 
 
function sayHelloToSofia() {
    console.log("Hello, Sofia!");
} 
  
function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
} 
  
sayHello();
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();


function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething('anything'); // passing the argument 'anything' into our function  

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo('Isabel'); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1" 

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 

  say("Goodbye", "Julio");
  say("Julio", "hello"); 
// Below is the combination of the above code
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  } 

  function add(x, y) {
    return x + y;
  } 

  console.log(add(80,9000)); 

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
  } 
  console.log(say("Hello", "Sofia"));

//const sum = add(x,y);
//const message = `The sum of your numbers is: ${sum}.`
//or the above code can be consolidated below as  the follwing code
//const message = `The sum of your numbers is: ${add(x, y)}.` 

function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
    
  } 

  console.log(say("Howdy", "partner")); 


const   statment = 'this is a',
        noun = 'function';

  function say(statement, noun) {
      console.log ('this is a function from the console log')
      return `${statement}, ${noun}!`;
  }