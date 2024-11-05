/* if (process.env.NODE_ENV !== 'production') */ 
require('dotenv').config();

const { app } = require('./express'),
      { Database } = require('./database.js');


  
//------------------------------------------- HEADERS

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


//------------------------------------------- blog posts

    
app.get('/get-blogs', (req, res) => new Promise(e => e(Database.query('bloggers')))
    .then(async db => {
        const data = db.collection;
        res.send({ data });
    })
    .catch(err => console.log('ERROR: ', err))
);
  
