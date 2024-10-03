const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

// Change to the Logs directory
process.chdir(logsDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`); // Write some text into each file
    console.log(fileName);  // Output file name to console
}
