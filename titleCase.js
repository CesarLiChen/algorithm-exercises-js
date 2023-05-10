// Upper cases every first letter of each word.
// Input could be a single word or sentence.

function titleCase(str) {
    const splittedStr = str.split(" ");

    const resultArr = splittedStr.map(
        word => word.charAt(0).toUpperCase() + word.substring(1)
    )

    const resultStr = resultArr.join(" ");
    return resultStr;
}