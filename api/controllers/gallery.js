import { db } from "../db.js";

export const getGallery = (req, res) => {
  const q = "SELECT * FROM gallery";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};
