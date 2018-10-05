module.exports = {
	passwordReset: email => ({ message: `Password has been reset for ${email}. Please login into your account again.` }),
	passwordResetSuccess: email => ({ message: `Password has been reset for ${email}. Please login into your account again.` }),
	passwordResetToken: email => ({ message: `Password reset confirmed. Please check ${email} for a reset link.` }),
	removedAccountSuccess: "Your Subskribble account has been successfully removed. Thank you for using our services.",
	thanksForReg: (email, firstName, lastName) => ({ message: `Thank you for registering, ${firstName} ${lastName}. Please check ${email} for a verification link.` }),
	updatedAccount: "Successfully updated your account. You must reverify your email address before logging into your account again.",
	updatedAccountDetails: "Successfully updated your account details."
};
