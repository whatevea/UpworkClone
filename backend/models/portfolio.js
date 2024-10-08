import mongoose from "mongoose";
const Schema = mongoose.Schema;

const portfolioSchema = new mongoose.Schema(
  {
    imageLink: {
      type: String,
      required: true,
    },

    websiteLink: {
      type: String,
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
