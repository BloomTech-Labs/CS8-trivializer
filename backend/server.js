const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router.js');
const server = express();

mongoose
    .connect('mongodb://admin:admin1@ds239681.mlab.com:39681/trivializer-db')
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


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API RUNNING ON ${port}`))


server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});
server.use('/api/user', userController);
server.use('/api/game', gameController);
server.use('/api/round', roundController);
