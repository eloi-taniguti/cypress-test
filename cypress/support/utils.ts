/**
 * This function will trim and replace any $nbsp; from the string.
 * @param text - string with text to be updated.
*/
export const getTextContent = (el: HTMLElement) => {
    return el.innerText.trim().replace(/\u00a0/g, ' ')
}