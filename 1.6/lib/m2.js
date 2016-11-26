exports.id = 'm2';

exports.content = [2];
exports.content.push(22);
exports.content.push(222);

const m1 = require('./m1');
console.log('m1 is not loaded yet', m1);
