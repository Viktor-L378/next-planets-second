import styles from "./App.module.css";
import Planets from "../Planets";
import { useSelector } from "react-redux";

function App(props) {

  const planetsData = useSelector(state => state.planets.data);
  console.log(planetsData)
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
    ],
    values: planetsData,
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

  return (
    <div className={styles.App}>
      <h1>Star Wars Planets</h1>
      <Planets data={data} />
    </div>
  );
}

export default App;
