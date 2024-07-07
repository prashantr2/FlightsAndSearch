const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');
const { apiRoutes } = require('./routes/index.js');

const db = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use('/api', apiRoutes);
    
    app.listen(PORT, async() => {
        console.log(`Server up and running on port ${PORT}`);

        if (process.env.SYNC_DB) {
            await db.sequelize.sync({ alter: true });
        }
    })
}

setupAndStartServer();