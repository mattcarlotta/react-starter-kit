module.exports = app => {
	const { db, query: { findUserByEmail, resetToken } } = app.database;
	const { missingEmailCreds } = app.shared.authErrors;
	const { mailer, emailTemplates: { newToken } } = app.services;
	const { createRandomToken } = app.shared.helpers;
	const portal = app.get("portal");
	const LocalStrategy = app.get("LocalStrategy");
	const passport = app.get("passport");

	passport.use('reset-token', new LocalStrategy({
			usernameField : 'email'
		},
		async (email, password, done) => {
			if (!email) return done(missingEmailCreds, false);

			try {
				await db.task('reset-token', async dbtask => {
					// check to see if email exists in the db
					const existingUser = await dbtask.oneOrNone(findUserByEmail, [email]);
					if (!existingUser) return done(missingEmailCreds, false);

					// create a new token for email reset
					const token = createRandomToken();
					await dbtask.none(resetToken, [token, email]);

					// creates an email template for a password reset
					const { firstname, lastname } = existingUser;
					const msg = {
						to: `${email}`,
						from: `helpdesk@subskribble.com`,
						subject: `Password Reset Confirmation`,
						html: newToken(portal, firstname, lastname, token)
					}

					// attempts to send a verification email to newly created user
					await mailer.send(msg);

					return done(null, email);
				})
			} catch (err) { return done(err, false) }
		})
	);
}
