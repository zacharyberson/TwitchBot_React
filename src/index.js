process.on('uncaughtException', err=> {
    console.error('There was an uncaught error', err);
    process.exit(1);
})

var bot = require('./lib/bot.js');