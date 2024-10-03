const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
    // Read all files in the Logs directory
    fs.readdirSync(logsDir).forEach((file) => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);  // Delete the file
        console.log(`delete files..${file}`);  // Output file name to console
    });

    // Remove the Logs directory after deleting all files
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
