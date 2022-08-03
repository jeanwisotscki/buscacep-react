import React from "react";

import styles from "./index.module.css";

export const SearchCep = () => {
  return (
    <div>
      <label className={styles.label}>Digite um CEP:</label>
      <input className={styles.input} type="text" />
    </div>
  );
};
