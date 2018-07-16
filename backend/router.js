const Authentication = require('./auth/authController.js');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(server) {
  server.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  server.post('/signin', requireSignin, Authentication.signin);
  server.post('/signup', Authentication.signup);
}