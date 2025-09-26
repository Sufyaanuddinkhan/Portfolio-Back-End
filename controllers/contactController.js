import Contact from "../models/Contact.js";

// Create a new contact entry
export const saveContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Your message has been saved successfully!" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Failed to save message. Please try again later." });
  }
};

// Fetch all messages (optional, for admin dashboard)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ message: "Failed to fetch contact messages" });
  }
};
