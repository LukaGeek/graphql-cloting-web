import mongoose from "mongoose";

const WhitelistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ["Whitelisted"], default: "Whitelisted" },
});

export default mongoose.models.Whitelist ||
  mongoose.model("Whitelist", WhitelistSchema);
