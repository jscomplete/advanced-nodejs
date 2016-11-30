const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(function () {
  console2.log(new Date());
  console2.error(new Error('Whoops'));
}, 5000);

// **********************

const util = require('util');
const debuglog = util.debuglog('web');

const server = require('http').createServer();

server.on('request', (req, res) => {
  debuglog('HTTP Request: %s', req.url);
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(8000);

// **********************

const util = require('util');

module.exports.puts = util.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'puts: Use console.log instead');

// **********************

const util = require('util');
const EventEmitter = require('events');

// ***** The old way
function CustomEmitter() {}

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function(data) {
  this.emit('data', data);
};
// *****

// ***** The new way
class CustomEmitter extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit('data', data);
  }
}
// *****

const stream = new CustomEmitter();
