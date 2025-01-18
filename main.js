const cors = require('cors'),
     { app, express, server, port } = require('./express'),
     cookieParser = require('cookie-parser'),

errorHandler = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('internal server error: ');
    next();
}
    
app.use(errorHandler);
app.use(cookieParser());

//MONGO DB

require('./database.js');

//express file system routing

app.use(express.static(__dirname + '/public'));

//data parsing

//app.use(express.urlencoded({ extended: true }));   

app.use(express.json());

//app.use(router);

app.use(cors());

//printify integration   

require('./auth.js');  
require('./endpoints.js');

//listen on a port

server.listen(port, () => console.log(`Server running on port: ${port}`)); 





  