module.exports = app => (req, res, next) => {
	if (!req.session.id) return res.status(201).send(null);
	next();
};
