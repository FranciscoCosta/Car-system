import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    mechanicId: {
      type: String,
      required: true,
    },
    mechanicName: {
        type: String,
        required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    lastMessage: {
      type: String,
      default: "",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", conversationSchema);