// Add constructor function to receive the letters of the word to be guessed, as well as functions to process letters guessed by the user
function Letter(letter) {
    // Assign key value to the letter passed by the word to be guessed
    this.letter = letter;
    // Assign boolean value of false to track whether letter has been guessed by user
    this.guessed = false;
    // Add function that returns the underlying character if the letter has been guessed, or an underscore if the letter has not been guessed
    this.toString = function () {
        // If the letter object has not been guessed, return a placeholder '_'
        if (this.guessed === false) {
            return "_";
        }
        // Otherwise, return the letter
        else {
            return this.letter;
        }
    };

    // Add a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.letterCheck = function (character) {
        // If the letter of the Letter object is equal to the letter passed to it as 'guessed' by the user
        if (this.letter === character) {
            // Reassign value of guessed to 'true'
            this.guessed = true;
        }
    }
}
// Export the constructor function
module.exports = Letter;