import { Schema, model } from "mongoose";

const dogsSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    raza: {
      type: String,
      required: true,
    },
    personalidad: {
      type: [Object],
      required: true,
    },
    years: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
    },
    historia: {
      type: String,
      required: true,
    },
    publicadoPor: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default model("dogs", dogsSchema);
