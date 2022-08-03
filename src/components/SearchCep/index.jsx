import React from "react";

import styles from "./index.module.css";

export const SearchCep = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Digite um CEP:</label>
      <input
        className={styles.input}
        type="number"
        placeholder="Somente números"
      />
    </div>
  );
};
