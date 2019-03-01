module.exports = app => {
  const { model } = app.get("mongoose");
  const { sendError } = app.utils.helpers;
  const userSeeds = app.seeds;
  const User = model("user");

  return {
    createUser: async (req, res, done) => {
      if (!req.body)
        return sendError("Missing user card creation parameters.", res, done);

      try {
        await User.createUser(req.body);
        return res
          .status(201)
          .json({ message: `Successfully created ${req.username}` });
      } catch (err) {
        return sendError(err, res, done);
      }
    },
    deleteUser: async (req, res, done) => {
      try {
        await User.findByIdAndDelete(req.params.id, req.body);
        return res
          .status(201)
          .json({ message: `Successfully deleted ${req.username}` });
      } catch (err) {
        return sendError(err, res, done);
      }
    },
    getUsers: async (req, res, done) => {
      try {
        const users = await User.find({});
        return res.status(200).send({ users });
      } catch (err) {
        return sendError(err, res, done);
      }
    },
    seedDatabase: async (req, res, done) => {
      try {
        const users = await User.find({});

        if (users) {
          await User.remove({});
        }

        await User.insertMany(userSeeds);

        return res.status(200).send({ users: userSeeds });
      } catch (err) {
        console.log("triggered bad seed");
        return sendError(err, res, done);
      }
    },
    updateUser: async (req, res, done) => {
      try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        return res
          .status(201)
          .json({ message: `Successfully updated ${req.username}` });
      } catch (err) {
        return sendError(err, res, done);
      }
    }
  };
};
