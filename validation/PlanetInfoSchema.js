import * as Yup from "yup";

const PlanetInfoSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  rotationPeriod: Yup.number().required("Required"),
  diameter: Yup.number().required("Required"),
  climate: Yup.string().required("Required"),
  gravity: Yup.string().required("Required"),
  terrain: Yup.string().required("Required"),
  surfaceWater: Yup.number().required("Required"),
});

export default PlanetInfoSchema;
