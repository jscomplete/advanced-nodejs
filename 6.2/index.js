const fs = require('fs');


// Asynchronous Form:
fs.readFile(__filename, (err, data) => {
  if (err) throw err;

  // do something with data
});


// Synchronous Form:
const data = fs.readFileSync(__filename);
// exceptions are immediately thrown
// do something with data
