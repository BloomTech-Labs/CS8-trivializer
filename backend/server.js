const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router.js');
const config = require("./config");
const deployConfig = require("./deploy-config");
const server = express();

mongoose
    .connect(deployConfig.db_url) // environment variable 
    .then(() => {
        console.log('CONNECTED TO MONGODB!')
    }).catch(err => {
        console.log(err, "UNABLE TO CONNECT TO DB")
    })



server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

const setupRoutes = require('./router.js')(server); //Handles all of the jwt-simple and passport authentication

const userController = require('./users/userController.js');
const gameController = require('./games/gameController.js');
const roundController = require('./rounds/roundController.js');


const port = 5000 || config.port;
server.listen(port, () => console.log(`API RUNNING ON ${port}`))


server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});
server.use('/api/user', userController);
server.use('/api/game', gameController);
server.use('/api/round', roundController);
