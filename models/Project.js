import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  image: String,
  github: String,
  liveDemo: String
});

export default mongoose.model("Project", projectSchema);
