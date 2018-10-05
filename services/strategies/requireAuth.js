module.exports = app => (req, res, next) => {
	const { badCredentials } = app.shared.authErrors;
	if (!req.session.id) return res.status(401).send({ err: badCredentials });
	next();
};
