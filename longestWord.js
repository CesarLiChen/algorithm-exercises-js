// Given sentence as a string, find longest word

function longestWord(sentence) {
    longest = "";
    arrOfWords = sentence.split(" ");

    for (let i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i].length > longest.length) {
            longest = arrOfWords[i];
        }
    }

    return longest;
}