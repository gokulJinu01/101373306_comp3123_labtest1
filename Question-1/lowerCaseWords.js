function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            return reject("Input should be an array.");
        }
        const filteredStrings = inputArray
            .filter(item => typeof item === 'string')  // Filter out non-string elements
            .map(str => str.toLowerCase());            // Convert strings to lowercase
        resolve(filteredStrings);
    });
}

// Example usage with the provided mixedArray
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['pizza', 'wings']
    .catch(error => console.error(error));
