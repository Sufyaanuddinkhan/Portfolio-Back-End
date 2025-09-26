import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the JSON file
const projectsFilePath = path.join(__dirname, "../data/projects.json");

// Controller to fetch all projects
export const getProjects = (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, "utf-8");
    const projects = JSON.parse(data);
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error reading projects.json:", error);
    res.status(500).json({ message: "Failed to load projects data" });
  }
};

// Controller to fetch a single project by ID
export const getProjectById = (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, "utf-8");
    const projects = JSON.parse(data);
    const project = projects.find((proj) => proj.id === parseInt(req.params.id));

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error("Error reading projects.json:", error);
    res.status(500).json({ message: "Failed to load project data" });
  }
};
