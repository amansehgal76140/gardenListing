const {
  addMarriageGarden,
  addGardenImages,
  getGardenImages,
  deleteMariageGarden,
  getWeddingGarden,
  deleteGardenImages,
  getCurrentGarden,
} = require("./gardenlisting.contoller");

const router = require("express").Router();

router.post("/addNewGarden", addMarriageGarden);
router.post("/addGardenImage", addGardenImages);
router.post("/getGardenImages", getGardenImages);
router.get("/getAllGarden", getWeddingGarden);
router.delete("/deleteGarden/:garden_id", deleteMariageGarden);
router.post("/deleteGardenImages", deleteGardenImages);
router.get("/getCurrentGarden/:garden_id", getCurrentGarden);

module.exports = router;
