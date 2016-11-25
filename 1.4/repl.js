const repl = require('repl');

let r = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT
});

r.context.lodash = require('lodash');
