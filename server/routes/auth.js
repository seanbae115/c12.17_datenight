const path = require('path');

module.exports = function (app, passport) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '..', '..', 'client', 'html_skeleton', 'index.html'));
	});

	app.get('/login', function (req, res) {
		res.sendFile(path.join(__dirname, '..', '..', 'client', 'html_skeleton', 'login.html'));
	});

	app.post('/login',
		passport.authenticate('local-signin', {
			successRedirect: '/location',
			failureRedirect: '/signup'
		})
	);

	app.get('/signup', function (req, res) {
		res.sendFile(path.join(__dirname, '..', '..', 'client', 'html_skeleton', 'signup.html'));
	});

	app.post('/signup',
		passport.authenticate('local-signup', {
			successRedirect: '/location', //need to redirect to proper location for React
			failureRedirect: '/login'
		})
	);

	app.get('/profile', isLoggedIn, function (req, res) {
		res.sendFile(path.join(__dirname, '..', '..', 'client', 'html_skeleton', 'profile.html'));
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/mail_sender', function (req, res) {
		res.sendFile(path.join(__dirname, '..', '..', 'client', 'html_skeleton', 'mail_sender.html'));
	});
}

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}