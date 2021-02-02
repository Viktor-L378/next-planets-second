import styles from "./Grid.module.css";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className={styles.gridTable}>
      <thead>
        <tr>
          {header.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td key={colName}>{row[colName]}</td>
            ))}
            {!!actions.length && (
              <td className={styles.gridActions}>
                {actions.map(({ label, action, title }) => {
                  let disabled = null;
                  if (Array.isArray(row[title]) && row[title].length < 1)
                    disabled = "disabled";
                  return (
                    <button
                      disabled={disabled}
                      key={Math.random()}
                      onClick={() => action(row)}
                    >
                      {label}
                    </button>
                  );
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
