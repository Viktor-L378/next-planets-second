import styles from './App.module.css';

import Planets from '../Planets';

function App() {
  return (
    <div className={styles.App}>
      <h1>Star Wars Planets</h1>
      <Planets />
    </div>
  );
}

export default App;
