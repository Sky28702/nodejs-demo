import express from "express";
import memberRouter from "./routes/member.js";
import connectDb from "./db/dbConnect.js";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", memberRouter);

app.get("/", (req, res) => {
  res.send(`The server is live at http://localhost:${PORT}`);
});

app.listen(PORT, async () => {
  console.log(`The server is live at http://localhost:${PORT}`);
  await connectDb();
});

export default app;
