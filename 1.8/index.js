// let exports = module.exports;

// exports.id = 1; // this is ok
//
// exports = { id: 1 }; // this is not ok
//
// module.exports = { id: 1 }; // this is ok
//
// // WHY??
//
// var g = 42; // local to this file.

// require = function() {
//   return { mocked: true };
// };
//
// const fs = require('fs');
// console.log(fs);

// const printStars = require('./printStars');
// printStars(10, 'Hi!');


require('./ascii-art')();
// console.log(require.cache);
// delete require.cache['/Users/samer/jscomplete/1.8/ascii-art.js']

require('./ascii-art')();
