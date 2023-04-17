import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    phone: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    isMechanic: {
      type: Boolean,
      default: false,
    },
    vehicles: {
        type: Array,
        default: [],
  },
    },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
