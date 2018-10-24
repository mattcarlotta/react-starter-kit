module.exports = (app) => {
  const { badCredentials } = app.shared.authErrors;
  const bcrypt = app.get('bcrypt');
  const mongoose = app.get('mongoose');

  // Define user model
  const userSchema = new mongoose.Schema({
    god: { type: Boolean, default: false },
    email: { type: String, unique: true, lowercase: true },
    username: { type: String, unique: true, lowercase: true },
    password: String,
  });

  // generates a salted + hashed password: User.createPassword()
  userSchema.statics.createPassword = async function createNewPassword(
    password,
  ) {
    try {
      const salt = await bcrypt.genSalt(12);
      if (!salt) throw new Error('Unable to generate password salt!');

      const newPassword = await bcrypt.hash(password, salt, null);
      if (!newPassword) throw new Error('Unable to generate a secure password!');

      return newPassword;
    } catch (err) {
      throw new Error(err);
    }
  };

  // create new user: User.createUser()
  userSchema.statics.createUser = async function newUser(user) {
    if (!user) throw new Error('User required!');

    try {
      return await this.create(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  // compares a password to the password stored in the model: userIstance.comparePassword()
  userSchema.methods.comparePassword = async function compare(
    incomingPassword,
  ) {
    try {
      const isMatch = await bcrypt.compare(incomingPassword, this.password);
      if (!isMatch) throw new Error(badCredentials);

      return isMatch;
    } catch (err) {
      throw new Error(err);
    }
  };

  // Create model class
  mongoose.model('users', userSchema);
};
