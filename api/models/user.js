module.exports = app => {
  const mongoose = app.get("mongoose");

  const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    username: { type: String, unique: true, lowercase: true },
    address: {
      street: String,
      suite: String,
      city: String,
      zipCode: String
    }
  });

  userSchema.statics.createUser = async function newUser(user) {
    if (!user) throw new Error("User required!");

    try {
      return await this.create(user);
    } catch (err) {
      throw new Error(err);
    }
  };

  mongoose.model("user", userSchema);
};
