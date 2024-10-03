// Function that simulates delayed success using Promises
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500); // 500ms delay
    });
};

// Function that simulates delayed exception using Promises
const rejectedPromise = () => {
    return new Promise((_, reject) => {  // reject is used for errors
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500); // 500ms delay
    });
};

// Call resolvedPromise and handle the result
resolvedPromise()
    .then(success => console.log(success))  // Logs: { message: 'delayed success!' }
    .catch(error => console.error(error));  // This won't be called for success

// Call rejectedPromise and handle the error
rejectedPromise()
    .then(success => console.log(success))  // This won't be called for error
    .catch(error => console.error(error));  // Logs: { error: 'delayed exception!' }
