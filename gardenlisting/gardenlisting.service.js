const connection = require("../db/db_connection");
const { getCurrentGarden } = require("./gardenlisting.contoller");

module.exports = {
  addGarden: (data, addMarriageGardenCallback) => {
    console.log(data);
    connection.query(
      `Insert into garden_listing(title,location,reviews,description,map_location_url,created_date) 
         values(?,?,?,?,?,?)`,
      [
        data.title,
        data.location,
        data.reviews,
        data.description,
        data.map_location_url,
        data.created_date,
      ],
      (err, results, fields) => {
        if (err) return addMarriageGardenCallback(err);
        console.log(results.insertId);
        return addMarriageGardenCallback(null, results.insertId);
      }
    );
  },

  addImage: (data, addGardenImageCallback) => {
    connection.query(
      `Insert into garden_images(garden_id,image_name) values(?,?)`,
      [data.garden_id, data.fileName],
      (err, results, fields) => {
        if (err) return addGardenImageCallback(err);
        return addGardenImageCallback(null, results);
      }
    );
  },

  getImages: (data, getGardenImagesCallback) => {
    connection.query(
      `Select image_name From garden_images where garden_id = ?`,
      [data.garden_id],
      (err, results, fields) => {
        if (err) return getGardenImagesCallback(err);
        return getGardenImagesCallback(null, results);
      }
    );
  },

  deleteGarden: (data, deleteMariageGardenCallback) => {
    console.log(data);
    connection.query(
      `Delete from garden_listing where id = ?`,
      [data.garden_id],
      (err, results, fields) => {
        if (err) return deleteMariageGardenCallback(err);
        return deleteMariageGardenCallback(null, results);
      }
    );
  },

  getGardens: (getWeddingGardenCallback) => {
    connection.query(
      `Select * From garden_listing`,
      [],
      (err, results, fields) => {
        if (err) return getWeddingGardenCallback(err);
        return getWeddingGardenCallback(null, results);
      }
    );
  },

  deleteImages: (data, deleteGardenImagesCallback) => {
    connection.query(
      `Delete from garden_images where image_name In(?)`,
      [data.image_name],
      (err, results, fields) => {
        if (err) return deleteGardenImagesCallback(err);
        console.log(fields);
        return deleteGardenImagesCallback(null, results);
      }
    );
  },

  getGardenDetails: (data, getCurrentGardenCallback) => {
    connection.query(
      `Select * From garden_listing where id = ?`,
      [data.garden_id],
      (err, results, fields) => {
        if (err) return getCurrentGardenCallback(err);
        return getCurrentGardenCallback(null, results);
      }
    );
  },
};
