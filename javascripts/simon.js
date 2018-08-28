// First, change the class of the quarters so that they light up to their
// respective different colors, but only for a very limited time, then
// the class will have to be removed and the colors will have to go back
// to their original state
function toggleButtonColor(el) {
    // when the 'light' class is added the css takes care of the color
    // the element will display
    el.classList.toggle('light');
}

// There will also need to be a play sound function but that will come later

// Then there will need to be a function that calls the light up function
// on key press or on click, or I guess one of each for each item.

// get buttons
const buttons = document.querySelectorAll('.quarter');

// only light up buttons when mouse is pressed on them (or keys, later)
buttons.forEach(button => {
    button.addEventListener('mousedown', () => toggleButtonColor(button));
    button.addEventListener('mouseup', () => toggleButtonColor(button));
});
