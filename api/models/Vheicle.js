import mongoose from "mongoose";
const { Schema } = mongoose;

const vheicleSchema = new Schema(
  {
    brand: {
        type: String,
        required: true,
        minlength: 3,
    },
    model: {
        type: String,
        required: true,
        minlength: 3,
    },
    year: {
        type: String,
        required: true,
        minlength: 3,
    },
    plate: {
        type: String,
        required: true,
        minlength: 3,
    },
    userId: {
        type: String,
        required: true,
        minlength: 3,
    },
    },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vheicle", vheicleSchema);
