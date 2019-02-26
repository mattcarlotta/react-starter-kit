module.exports = app => {
  const { model } = app.get("mongoose");
  const { sendError } = app.utils.helpers;
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
    getUsers: async (req, res, done) => {
      try {
        const users = await User.find({});
        return res.status(201).json({ users });
      } catch (err) {
        return sendError(err, res, done);
      }
    }
  };
};
