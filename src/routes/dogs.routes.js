import { Router } from "express";
import Dogs from "../Models/Dogs";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const getDogs = await Dogs.find();
    if (getDogs < 1) {
      res.send("no hay resultados");
    } else {
      res.json(getDogs);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoPerro = new Dogs(req.body);
    await nuevoPerro.save();
    res.send("dog saved");
  } catch (error) {
    console.log(error);
  }
});

export default router;
