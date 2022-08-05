import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export const SearchCep = () => {
  const [error, setError] = React.useState(false);
  const [cep, setCep] = React.useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (cep.length === 8) navigate("/busca/" + cep);

    setError(true);
  };

  const isNumber = (e) => {
    if (e.keyCode !== 8) {
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="cep">
        Digite um CEP:
      </label>
      <input
        className={styles.input}
        id="cep"
        type="text"
        value={cep}
        maxLength="8"
        placeholder="Somente números"
        style={{
          borderColor: error ? "tomato" : "",
          color: error ? "tomato" : "",
          boxShadow: error ? "0 0 0 1px red" : "",
        }}
        onKeyPress={(e) => isNumber(e)}
        onChange={(e) => {
          setCep(e.target.value);
          setError(false);
        }}
      />
      {error ? (
        <strong className="error">
          Por favor, preencha o campo corretamente.
        </strong>
      ) : (
        ""
      )}
      <button className={styles.button} onClick={handleClick}>
        Buscar
      </button>
    </div>
  );
};
