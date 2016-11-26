// console.log(module);

// Extra paths:
// $HOME/.node_modules
// $HOME/.node_libraries
// $PREFIX/lib/node

// Just resolve, don't load
// require.resolve('find-me');

// Resolve a find-me.js on the same level as index.js
// const findMe = require('./find-me');

// Resolve a find-me.js on the parent level
// const findMe = require('../find-me');

// Resolve a find-me.js on the root level
// const findMe = require('/find-me');

// const findMeExports = require('./lib/find-me');

// Circular module
const m1 = require('./lib/m1');
console.log(m1);
