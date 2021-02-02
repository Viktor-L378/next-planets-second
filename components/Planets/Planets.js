import styles from "./Planets.module.css";
import { useState } from "react";

import Grid from "../Grid";
import Modal from "../Modal/Modal";
import PlanetInfoForm from "../PlanetInfoForm/PlanetInfoForm";

function Planets(props) {
  const [modalIsActive, setModalActive] = useState(false);
  const [successOrErrorMessage, setMessage] = useState("");

  const data = props.data;

  const onSubmitHandler = (dataFromForm) => {
    setModalActive(false);
    console.log(dataFromForm);

    if (Math.floor(Math.random() * 1000) % 2 !== 0) {
      setMessage("Error");
    } else {
      setMessage("Success");
    }
    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <div className={styles.App}>
      {successOrErrorMessage ? (
        <Modal isActive={true}>
          <h1>{successOrErrorMessage}</h1>
        </Modal>
      ) : null}
      <Modal isActive={modalIsActive} setInactive={() => setModalActive(false)}>
        <PlanetInfoForm onSubmit={onSubmitHandler} />
      </Modal>
      <Grid data={data} />
    </div>
  );
}

export default Planets;
