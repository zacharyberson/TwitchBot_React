const https = require('https');

export const getAccessToken = (callback = res => {}) => {
    const options = {
        hostname: 'id.twitch.tv',
        path: '/oauth2/token'
            + `?client_id=${process.env.T_CLIENT_ID}`
            + `&client_secret=${process.env.T_CLIENT_SECRET}`
            + '&grant_type=client_credentials',
        method: 'POST'
    };

    const responseParser = (response) => {
        let data = '';
    
        response.on('data', (chunk) => {
            data += chunk;
        });
    
        response.on('end', (chunk) => {
            callback(JSON.parse(data));
        });
    };

    console.log("sending access token request");
    console.log(`posting to ${options.hostname}${options.path} with client_id ${process.env.T_CLIENT_ID} and client secret ${process.env.T_CLIENT_SECRET}`);
    const req = https.request(options, responseParser);
    req.end();
}

export const getUserId = (username, accessToken, callback = res => {}) => {
    const options = {
        hostname: 'api.twitch.tv',
        path: `/helix/users?login=${username}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Client-Id': process.env.T_CLIENT_ID
        }
    };

    const responseParser = (response) => {
        let data = '';
    
        response.on('data', (chunk) => {
            data += chunk;
        });
    
        response.on('end', (chunk) => {
            callback(JSON.parse(data));
        });
    };

    console.log("sending user ID request");
    const req = https.request(options, responseParser);
    req.end();
}

export const getUserInfo = (username, accessToken, callback = res => {}) => {
    getUserId(username, accessToken, res => {
        console.log("got user ID: " + res.data[0].id);

        const options = {
            hostname: 'api.twitch.tv',
            path: `/helix/channels?broadcaster_id=${res.data[0].id}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Client-Id': process.env.T_CLIENT_ID
            },
        };

        const responseParser = (response) => {
            let data = '';
        
            response.on('data', (chunk) => {
                data += chunk;
            });
        
            response.on('end', (chunk) => {
                callback(JSON.parse(data));
            });
        };

        console.log("sending user Info request");
        const req = https.request(options, responseParser);
        req.end();
    });
}