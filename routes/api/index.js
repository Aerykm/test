const router = require("express").Router();
const discussionRoutes = require("./discussions");

// Book routes
router.use("/discussions", discussionRoutes);

module.exports = router;
