module.exports = ({ Schema }) => {
  const userSchema = new Schema({
    address: {
      street: String,
      suite: String,
      city: String,
      zipCode: String
    },
    email: String,
    firstName: String,
    lastName: String,
    username: { type: String, unique: true, lowercase: true }
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
