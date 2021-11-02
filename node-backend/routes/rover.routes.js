const express = require('express');
const app = express();

const roverRoute = express.Router();


roverRoute.route('/').get((req, res) => {

});

module.exports = roverRoute;