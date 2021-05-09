/**
 * Open overlay
 */
function openOverlay() {
    document.getElementById("myNav").style.width = "100%";
}
/**
 * Closes overlay
 */
function closeOverlay() {
    document.getElementById("myNav").style.width = "0%";
}

/**
 * Converts ``string`` to a HTML DOM Element
 * 
 * @param  {string} s
 * @returns {HTMLElement} element
 */
function htmlFromString(s) {
    let element = document.createElement('ELEMENT');
    element.innerHTML = s;

    return element;
}