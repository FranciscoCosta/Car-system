import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";
import bodyParser from "body-parser";
import AuthRoute from "./routes/AuthRoute.js";


const app = express();
app.use(bodyParser.json());

dotenv.config();
app.use(cors({ origin: '*' }));
app.use(cors());
app.use(express.json());
app.use(AuthRoute)


app.get("/", (req, res) => {
  res.send("Ultracar");
})

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
