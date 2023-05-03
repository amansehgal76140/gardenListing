const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const gardenRouter = require("./gardenlisting/gardenlisiting.route");
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use("/api/garden", gardenRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log("server started");
});
