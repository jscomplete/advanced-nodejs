// instead of

process.env.PORT

// read from a config utility

const { config } = require('./util');

config.port
