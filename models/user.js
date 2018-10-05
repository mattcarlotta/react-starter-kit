const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const { badCredentials } = app.shared.authErrors;
  const bcrypt = app.get("bcrypt");
  const mongoose = app.get("mongoose");

  // Define user model
  const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    username: { type: String, unique: true, lowercase: true },
    password: String
  });

  // Generate a salt, password, then run callback
  userSchema.methods.createPassword = async (password, next) => {
    try {
      const salt = await bcrypt.genSalt(12);
      if (!salt) return next("Unable to generate password salt");

      const newPassword = await bcrypt.hash(password, salt, null);
      if (!newPassword) return next("Unable to generate secure password");

      next(null, newPassword);
    } catch (e) {
      next(e);
    }
  };

  // Set a compare password method on the model
  userSchema.methods.comparePassword = async (incomingPassword, next) => {
    try {
      const isMatch = await bcrypt.compare(incomingPassword, this.password);
      if (!isMatch) return next(badCredentials, null);

      next(null, isMatch);
    } catch (e) {
      next(e);
    }
  };

  // Create model class
  return mongoose.model("users", userSchema);
};
