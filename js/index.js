// Your code goes here
// ### Task 2: Create listeners for 10 types of events

// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types.
//   You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects,
//   remove objects, etc. Here are some event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

//step 1: add a mouseover event to title
const heading = document.querySelector(".logo-heading");
function headingFunction(event){
    hover();
}
heading.addEventListener("mouseover", headingFunction);
//helper function
function hover () {
    heading.style.color = "orange";
}



// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// example: const launchButton = document.querySelector("#launchButton");



//make site more interactive
//change colors, etc
//mouseover, keydown, wheel, load, focus, resize, scroll, select, dblclick, drag/drop


//examples
// function launch(event){
//     openModal();
//     killReports(); //replaced successMessage.classList.add("off");
//     //replaced failureMessage.classList.add("off");
// }
// launchButton.addEventListener("click", launch);


//helper function
// function openModal() {
//     modal.classList.remove("off");
// }