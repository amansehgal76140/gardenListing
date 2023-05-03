const {
  addMarriageGarden,
  addGardenImages,
  getGardenImages,
  deleteMariageGarden,
  getWeddingGarden,
} = require("./gardenlisting.contoller");

const router = require("express").Router();

router.post("/addNewGarden", addMarriageGarden);
router.post("/addGardenImage", addGardenImages);
router.post("/getGardenImages", getGardenImages);
router.get("/getGarden", getWeddingGarden);
router.delete("/deleteGarden/:garden_id", deleteMariageGarden);

module.exports = router;
