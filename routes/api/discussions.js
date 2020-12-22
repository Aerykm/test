const router = require("express").Router();
const discussionsController = require("../../controllers/discussionsController");

// Matches with "/api/discussions"
router.route("/")
  .get(discussionsController.findAll)
  .post(discussionsController.create);

// Matches with "/api/discussions/:id"
router
  .route("/:id")
  .get(discussionsController.findById)
  .put(discussionsController.update)
  .delete(discussionsController.remove);

module.exports = router;
