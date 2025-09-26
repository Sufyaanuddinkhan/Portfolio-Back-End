import express from "express";
import { saveContactForm, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

// Save new message
router.post("/", saveContactForm);

// Get all messages (optional for admin)
router.get("/", getAllContacts);

export default router;
