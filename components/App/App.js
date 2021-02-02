import styles from "./App.module.css";
import Planets from "../Planets";
import { useSelector } from "react-redux";

function App(props) {
  const planetsData = useSelector((state) => state.planets.data);

  return (
    <div className={styles.App}>
      <h1>Star Wars Planets</h1>
      <Planets data={planetsData} />
    </div>
  );
}

export default App;
