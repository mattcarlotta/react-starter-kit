module.exports = app => {
  const { model } = app.get("mongoose");
  const { sendError } = app.utils.helpers;
  const seeds = app.seeds.data;
  const User = model("user");

  return {
    createUser: async (req, res, done) => {
      if (!req.body)
        return sendError("Missing user card creation parameters.", res, done);

      try {
        await User.createUser(req.body);
        return res
          .status(201)
          .json({ message: `Successfully created ${req.body.userName}` });
      } catch (err) {
        if (err.toString().includes("E11000")) {
          return sendError(
            "Error: That username is already in use!",
            res,
            done
          );
        }
        return sendError(err, res, done);
      }
    },
    deleteUser: async (req, res, done) => {
      try {
        const user = await User.findById(req.params.id);
        await User.findByIdAndDelete(req.params.id, req.body);
        return res
          .status(201)
          .json({ message: `Successfully deleted ${user.userName}` });
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
        await User.deleteMany({});
        await User.insertMany(seeds);
        const users = await User.find({});

        return res.status(200).send({ users });
      } catch (err) {
        return sendError(err, res, done);
      }
    },
    updateUser: async (req, res, done) => {
      try {
        await User.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res
          .status(201)
          .json({ message: `Successfully updated ${req.body.userName}` });
      } catch (err) {
        return sendError(err, res, done);
      }
    }
  };
};
