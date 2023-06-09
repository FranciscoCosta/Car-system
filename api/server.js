import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongo/connect.js";
import bodyParser from "body-parser";
import AuthRoute from "./routes/AuthRoute.js";
import Vheicleroute from "./routes/VheicleRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import ConversationRoute from "./routes/ConversationRoute.js";
import messageRoute from "./routes/messageRoute.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

// Enable CORS for all routes
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(AuthRoute);
app.use(Vheicleroute);
app.use(OrderRoute);
app.use(ConversationRoute)
app.use(messageRoute)

// Enable preflight requests for all routes
app.options('*', cors());

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
