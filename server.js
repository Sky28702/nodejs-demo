import express from "express";
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`The server is live at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`The server is live at http://localhost:${PORT}`);
});

export default app;
