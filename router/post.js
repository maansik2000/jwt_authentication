const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/user");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "my first post",
      description: "random pist you shouldn't accessed",
    },
    user: {
      id: req.user,
   
    },
  });
});

module.exports = router;
