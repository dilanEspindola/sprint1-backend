import { Router } from "express";
import Cats from "../Models/Cats";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const getCats = await Cats.find();
    if (getCats < 1) {
      res.send("no hay resultados");
    } else {
      res.json(getCats);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoGato = new Cats(req.body);
    await nuevoGato.save();
    res.send("dog saved");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Cats.remove({ _id: id });
    res.send("removed");
  } catch (error) {
    console.log(error);
  }
});

export default router;
