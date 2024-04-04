import mongoose from "mongoose";
//Every thing we upload should have schema that tell us which type of things should be placed in it
const postSchema = mongoose.Schema({
  creatorFirst: String,
  creatorFirst: String,
  fatherName: String,
  cnic: String,
  date: Date,
  phone: Number,
  expert: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//convert schema into a mongodb model that we work in models
const postMessage = mongoose.model("postMessage", postSchema);
export default postMessage;
