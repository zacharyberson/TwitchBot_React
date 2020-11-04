const tmi = require('tmi.js');

// Define configuration options
const opts = {
    identity: {
        username: process.env.REACT_APP_T_USER,
        password: process.env.REACT_APP_T_PASS
    },
    channels: [
        process.env.REACT_APP_T_CHANNEL
    ]
};
// Create a client with our options
const client = new tmi.client(opts);

export default client;