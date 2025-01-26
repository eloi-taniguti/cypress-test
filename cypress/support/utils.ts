/**
 * This function will replace any $nbsp; from the string.
 * @param text - string with text to be updated.
*/

export const replaceWhiteSpace = (text: string) => {
    return text.replace(/\u00a0/g, ' ')
}