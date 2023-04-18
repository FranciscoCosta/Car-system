import mongoose from "mongoose";
const { Schema } = mongoose;

const ordersSchema = new Schema(
  {
    mechanicId: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    vehicleId: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    status: {
        type: String,
        required: true,
        minlength: 3,
    },
    descritpion: {
        type: String,
        required: true,
        minlength: 3,
    },
    deliveryDate: {
        type: String,
        required: true,
        minlength: 3,
    },
    price: {
        type: String,
        required: true,
        minlength: 3,
    },
    clientId: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", ordersSchema);
