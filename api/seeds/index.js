module.exports = app => {
  const { model } = app.get("mongoose");
  const User = model("user");

  const users = [
    {
      email: "example1@example.com",
      firstName: "Bob",
      lastName: "Smith",
      username: "user1",
      address: {
        street: "123 Galena St.",
        suite: "",
        city: "Silcon Valley",
        zipCode: "55555"
      }
    },
    {
      email: "example2@example.com",
      firstName: "Emily",
      lastName: "Johnson",
      username: "user2",
      address: {
        street: "124 Galena St.",
        suite: "",
        city: "Silcon Valley",
        zipCode: "55555"
      }
    },
    {
      email: "example3@example.com",
      firstName: "Sue",
      lastName: "McDonald",
      username: "user3",
      address: {
        street: "125 Galena St.",
        suite: "",
        city: "Silcon Valley",
        zipCode: "55555"
      }
    }
  ];

  (async () => {
    try {
      // await User.remove({});
      await User.insertMany(users);
      return console.log("--[SUCCESS]-- Seeded database!");
    } catch (err) {
      return console.log("--[ERROR]-- ", err.toString());
    } finally {
      process.exit(0);
    }
  })();
};
