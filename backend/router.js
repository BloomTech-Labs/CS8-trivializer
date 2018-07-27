const Authentication = require('./auth/authController.js');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const { stripeCharge } = require('./stripe/stripeController');

module.exports = function(server) {
  server.get('/', requireAuth, function(req, res) { //this must be changed, blank screen on load for unautehnticated users
    res.send({ hi: 'there' });
  });
  server.post('/signin', requireSignin, Authentication.signin);
  server.post('/signup', Authentication.signup);
  // server.post('/api/charge', requireAuth, stripeCharge);
}

 //blah blah