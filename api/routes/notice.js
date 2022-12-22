import express from "express";
import { getNotice, addNotice,deleteNotice, updateNotice } from "../controllers/notice.js";

const router = express.Router();

router.get("/", getNotice);
router.post("/", addNotice);
router.put("/:id", updateNotice)
router.delete("/:id", deleteNotice)

export default router;

