import styles from "./Planets.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../Grid";
import Modal from "../Modal/Modal";
import PlanetInfoForm from "../PlanetInfoForm/PlanetInfoForm";
import { fetchPlanets } from "../../store/actions/planets";
import { useRouter } from "next/router";

function Planets(props) {
  const [modalIsActive, setModalActive] = useState(false);
  const [successOrErrorMessage, setMessage] = useState("");
  useEffect(() => {
    if (Object.keys(props.data).length < 1) props.fetchPlanets();
  }, []);
  const router = useRouter();

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
      "residents",
      "films"
    ],
    values: props.data,
    actions: [
      {
        label: "Add Planet",
        action: (row) => {
          setModalActive(true);
          console.log(`redirect to grid with ${row.films.length} Films`);
        },
      },
      {
        label: "Go to Residents",
        action: (row) => {
          console.log(
            `redirect to grid with ${row.residents.length} Residents`
          );
          const residentsIds = row.residents.map(
            (residentUrl) => residentUrl.match(/\d+/g)[0]
          );
          router.push(`/residents/${residentsIds.join("/")}`);
          console.log(`redirect to grid with ${row.url} Films`);
        },
        title: "residents",
      },
      {
        label: "Go to Films",
        action: (row) => {
          const filmIds = row.films.map((filmUrl) => filmUrl.match(/\d+/g)[0]);
          router.push(`/films/${filmIds.join("/")}`);
          console.log(`redirect to grid with ${row.url} Films`);
        },
        title: "films",
      },
      {
        label: "Planet Info",
        action: (row) => {
          router.push(`/planets/${row.url.match(/\d+/g)[0]}`);
          console.log(`redirect to grid with ${row.url} Films`);
        },
      },
    ],
  };

  const onSubmitHandler = (dataFromForm, onSubmitProps) => {
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

function mapStateToProps(state) {
  return {
    data: state.planets.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPlanets: bindActionCreators(fetchPlanets, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
