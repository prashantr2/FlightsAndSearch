const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');

const setupAndStartServer = async () => {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server up and running on port ${PORT}`);
    })
}

setupAndStartServer();