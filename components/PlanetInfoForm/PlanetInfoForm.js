import { Formik, Form, Field } from "formik";

import styles from "./PlanetInfoForm.module.css";
import PlanetInfoSchema from "../../validation/PlanetInfoSchema";

const PlanetInfoForm = ( props ) => (
  <div className={styles.PlanetInfoForm}>
    <h1>Add Planet</h1>
    <Formik
      initialValues={{
        name: "",
        rotationPeriod: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surfaceWater: "",
      }}
      validationSchema={PlanetInfoSchema}
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>name</label>
          <Field name="name" />
          {errors.name && touched.name ? <span>{errors.name}</span> : null}
          <label>rotationPeriod</label>
          <Field name="rotationPeriod" />
          {errors.rotationPeriod && touched.rotationPeriod ? (
            <span>{errors.rotationPeriod}</span>
          ) : null}
          <label>diameter</label>
          <Field name="diameter" />
          {errors.diameter && touched.diameter ? (
            <span>{errors.diameter}</span>
          ) : null}
          <label>climate</label>
          <Field name="climate" />
          {errors.climate && touched.climate ? (
            <span>{errors.climate}</span>
          ) : null}
          <label>gravity</label>
          <Field name="gravity" />
          {errors.gravity && touched.gravity ? (
            <span>{errors.gravity}</span>
          ) : null}
          <label>terrain</label>
          <Field name="terrain" as="select">
            <option value="desert">desert</option>
            <option value="jungle">jungle</option>
            <option value="rainforests">rainforests</option>
          </Field>
          {errors.terrain && touched.terrain ? (
            <span>{errors.terrain}</span>
          ) : null}
          <label>surfaceWater</label>
          <Field name="surfaceWater" />
          {errors.surfaceWater && touched.surfaceWater ? (
            <span>{errors.surfaceWater}</span>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PlanetInfoForm;
