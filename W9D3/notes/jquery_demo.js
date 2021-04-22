
/* 
Terms
+ DOM
  + document object model
  + tree-like representation of elements on the page
  
+ DOM Element
  + A DOM element object represents an HTML element on the page like a `<div>` or a `<header>`
+ Vanilla DOM Manipulation
	+ using vanilla javascript (ie built in js functions) to manipulate the DOM without using 3rd party libraries
+ DOM Event
	+ any event that can happen during user interaction with a webpage (eg clicking, dragging, scrolling, submitting a form, etc)
+ Document
	+ any webpage loaded in the browser
	+ serves as an entry point to the DOM's content (ie the DOM tree)
+ jQuery
	+ library of JavaScript that allows us to interact with the DOM
+ jQuery object
  + contains a collection of DOM elements with extra functionalities
  + 2 global jquery objects: 
    - `$`
    - `jQuery`
*/


/* */
/* ----------------------------- jQuery Demo ----------------------------- */



/* The basics ------------------------------------------------------------ */




/* Changing classes ------------------------------------------------------ */



/* Adding elements, text, & data ---------------------------------------- */
$("li").data({ complete: false}); //setter
const $last = $("li").last();

$last.data(); //getter
$last.data("complete"); //getter for one specific key
$last.data("complete", true); //setter for one key value pair

const $first = $("li").first();


/* 4 uses of `$` --------------------------------------------------------- */

// 1. SELECTOR

//can be used iwth any css selector
$("input");
$(".incomplete"); //class elector
$("#complete-all") // id selector
$("button#complete-all") // chained selectors

// 2. HTML CREATOR
$("<li>") //creates an li tag wrapped in a jQuery object

// 3. WRAPPER
const first = $("li")[0] //when you index in, you get an actual li element, not a jQuery obj
$(first) // jQuery object

// 4. READY
$(callback)



/* Event Listeners ------------------------------------------------------- */

/* ------ toggle all lis between complete & incomplete ------ */
const toggleAll = event => {
  // TODO: change styling by changing the class
  $("li").toggleClass("complete incomplete")

};

$('#complete-all').on('click', toggleAll); 
 // takes in the type of event ('click') and the callback to invoke



/* ------------ toggle classes for each li ------------ */
// const toggleToLearn = (e) => {
//   debugger

//   // TODO: extract the event's currentTarget and wrap it in a jQuery object

//   // TODO: toggle the class of the selected element

// };

// $('li').on('click', toggleToLearn);

// // does this work for new lis?
// const $newLi = $('<li>');
// $newLi.append('pls work');
// $newLi.addClass('incomplete');
// $('ul').append($newLi);






















// ----->  two solutions:

/* Solution 1: Install the event listener on the parent `ul`
  - we can do this because of event bubbling / propagation
  - the event object that gets passed up the DOM tree has properties 
  that lets us access the element on which the event was triggered
  and the element that is listening for the event (target)
*/
// const toggleLi = e => {
//   debugger 

//   // TODO: extract the event's li and wrap it in a jQuery object

//   // TODO: toggle the class of the selected element
// };

// $('ul').on('click', toggleLi);



/* Solution 2: Use a delegated event handler
  - child elements delegate event handling to an ancestor element
  - advantages of using a delegated event handler:
    1. can process events from descendant elements that are added to the document at a later time (after the event handler is installed)
    2. reduces overhead of installing many event handlers (which can slow page loading)
  - with event delegation, e.currentTarget can change: e.currentTarget === e.target
  - syntax: pass in 3 args to `.on()`: eventName, selector, eventHandler
    + the eventHandler won't be invoked when the event occurs directly on the bound (ancestor) element
    + instead, the eventHandler will be invoked for any descendant elements that match the selector
*/
// const toggleLi = e => {
//   debugger 

//   // TODO: extract the event's li and wrap it in a jQuery object

//   // TODO: toggle the class of the selected element
// };

// $('ul').on('click', 'li', toggleLi);



/* ------------ create a new ToLearn item using a form ------------ */
// const addToLearn = function (e) {
//   e.preventDefault();  // needed to prevent a full page refresh
//   // debugger
    
// };

// $('.todo-form').on('submit', addToLearn);



/* ------------ install listeners all at once ------------ */
// const applyListeners = () => {
//   // listen for a "click" event on the "Complete All" button

//   // listen for a "click" event on the "li"s in our todo list

//   // listen for a "submit" event on the todo form

//   // listen for a "click" event on the "Show Fun Gif" button
// };

// applyListeners();