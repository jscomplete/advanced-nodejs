// const { Writable } = require('stream');
//
// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });
//
// process.stdin.pipe(outStream);

process.stdin.pipe(process.stdout);
