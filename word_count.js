const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} filePath 
 */
function countOccurrences(filePath) {
  // Object to keep record of counts
  const record = {};

  // Read the file from the path. This assumes the file already exists.
  const file = fs.readFileSync(path.join(__dirname, filePath));

  // Read the content of the file.
  const content = file.toString();

  // Split into an array of words.  This assumes a single space is the delimeter
  const wordArray = content.split(' ');

  for (const word of wordArray) {
    // If word doesn't exist in the record, initialize by setting the count to 1
    if (!record[word])
      record[word] = 1;
    else record[word] = record[word] + 1; // Increment count if word exists in record
  }

  console.log(JSON.stringify(record, undefined, 2));
}

countOccurrences('words.txt');