const express = require('express');

const apiRoutes = express.Router();

const v1ApiRoutes = require('./v1/index.js');
apiRoutes.use('/v1', v1ApiRoutes);


module.exports = {
    apiRoutes
}