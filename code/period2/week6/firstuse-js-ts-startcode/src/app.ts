import express from "express";
import dotenv from "dotenv";
import path from "path";
import friendsRoute from "./routes/FriendRoutes";

dotenv.config();
const app = express();

//Logger
app.use((req, res, next) => {
  console.log("Request made at: " + new Date());
  console.log("Request method: " + req.method);
  console.log("Request url: " + req.url);
  console.log("Remote ip: " + req.ip);
  next();
});

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api/friends", friendsRoute);

app.get("/demo", (req, res) => {
  res.send("hi");
});

export default app;
