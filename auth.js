require('dotenv').config();

const { v4: uuidv4 } = require('uuid');

//HTTP / printify integration

class HTTP { 
    
    static request (method, body)
    {

        let methods = [ 'GET', 'POST', 'PUT', 'DELETE' ];

        if (!methods.includes(method)) {
            console.log('Invalid request made.');
            return;
        }

        const http = {

            method,
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': process.env.ADDRESS,
                'User-Agent': 'NodeJS',
                'Authorization': `Bearer ${process.env.PRINTIFY_SECRET_KEY}`,
                'X-Correlation-ID': uuidv4()
            }
        };

        if (body) 
            http['body'] = body;

        return http;

    }  
}

module.exports = { HTTP };

