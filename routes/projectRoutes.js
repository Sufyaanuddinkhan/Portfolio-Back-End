import express from "express";
import { getProjects, getProjectById } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);       // GET all projects
router.get("/:id", getProjectById); // GET a single project by ID

export default router;
