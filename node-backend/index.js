let express = require('express');
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');


    const roverRoute = require('./routes/rover.routes')

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cors());

    // Static directory path 
    app.use(express.static(path.join(__dirname, 'dist/nasa-api')))

    // API root
    app.use('/api', roverRoute)

    // PORT
    const port = process.env.PORT || 8000;


   
    app.listen(port, () => {
        console.log('Listeningon port ' + port)
    });

    // Base Route 
    app.get('/', (req, res) => {
        
        const fetchNASAData = async () => {
            try {
              const response = await fetch(`${url}${api_key}`)
              const data = await response.json()
              console.log('NASA APOD data', data)
              displayData(data)
            } catch (error) {
              console.log(error)
            }
          }    });


    // error handler
    app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });