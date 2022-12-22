import { db } from "../db.js";

export const getNotice = (req, res) => {
  const q = "SELECT * FROM notice";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const addNotice = (req, res) => {
    const q =
      "INSERT INTO notice (`title`, `link`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.link,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
};

export const updateNotice = (req, res) => {
  const postId = req.params.id;
    const q =
      "UPDATE notice SET `title`=?,`link`=? WHERE `id` = ?";
    const values = [req.body.title, req.body.link, ];

    db.query(q, [...values, postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
};

export const deleteNotice = (req, res) => {
   const postId = req.params.id;
    const q = "DELETE FROM notice WHERE `id` = ? ";
    db.query(q, [postId], (err, data) => {
      if (err) return res.status(403).json("Error!");
      return res.json("Post has been deleted!");
    });
};
