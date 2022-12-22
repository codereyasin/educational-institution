import express from "express";
import {
  getTeachers
} from "../controllers/teacher.js";

const router = express.Router();

router.get("/", getTeachers);

export default router;

