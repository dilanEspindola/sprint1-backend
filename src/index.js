import express from "express";
import cors from "cors";
import dogsRouter from "./routes/dogs.routes";
import catsRouter from "./routes/cats.routes";
import "./database";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/dogs", dogsRouter);
app.use("/cats", catsRouter);

// server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
