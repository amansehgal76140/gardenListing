const {
  addGarden,
  addImage,
  getImages,
  deleteGarden,
  getGardens,
} = require("./gardenlisting.service");
const MOMENT = require("moment");

module.exports = {
  addMarriageGarden: (req, res) => {
    const data = req.body;
    let created_date = MOMENT().format("YYYY-MM-DD HH:mm:ss.000");
    addGarden({ ...data, created_date }, (err, gardenId) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Internal Server Error",
        });
      }
      return res.status(201).json({
        success: 1,
        gardenId,
      });
    });
  },

  addGardenImages: (req, res) => {
    console.log("Request comes");
    var today = new Date();
    var date =
      today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();
    var time =
      today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var dateTime = date + "" + time + "" + Math.floor(Math.random() * 100 + 1);
    const fileName = dateTime + req.files.garden_image.name;
    const file = req.files.garden_image;
    let uploadPath = __dirname + "/uploads/" + fileName;
    file.mv(uploadPath, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Unable to Upload File",
        });
      }
      const data = { ...req.body, fileName: fileName };
      console.log(data);
      addImage(data, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Bad Request",
          });
        }
        return res.status(200).json({
          success: 1,
          fileName,
        });
      });
    });
  },

  getGardenImages: (req, res) => {
    getImages(req.body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Internal Server Error",
        });
      }
      const fileNames = results.map((result) => result.fileName);
      console.log(fileNames);
    });
  },

  deleteMariageGarden: (req, res) => {
    const data = req.params;
    deleteGarden(data, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Bad Request",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Deleted Successfully",
      });
    });
  },

  getWeddingGarden: (req, res) => {
    getGardens((err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Internal Server Error",
        });
      }
      return res.status(200).json({
        success: 1,
        gardenDetails: results,
      });
    });
  },
};
