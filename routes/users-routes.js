const express = require("express");
const app = express();

const router = express.Router();

const DUMMY_USER = [
  {
    id: "u1",
    name: "Tom",
  },

  {
    id: "u2",
    name: "Jan",
  },
];

router.get("/:uid", (req, res, next) => {

  const userId = req.params.uid;
  const user = DUMMY_USER.find((user) => user.id === userId);
  res.json({ user });
});

module.exports = router;