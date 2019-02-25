import { model } from "mongoose";
import { sendError } from "../utils/errors";

const User = model("user");

export default () => {
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
    }
  };
};
