import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

const correctLengthOfCep = 8;

const isNumber = (e) => {
  if (e.keyCode !== 8) {
    if (!/\d/.test(e.key)) return e.preventDefault();
  }
};

export const InputCepContainer = () => {
  const navigate = useNavigate();
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleNavigation = () => {
    if (cep.length === correctLengthOfCep) return navigate("/busca/" + cep);

    setError(true);
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
        maxLength={correctLengthOfCep}
        placeholder="Somente números"
        autoComplete="off"
        inputMode="numeric"
        autoFocus
        style={{
          borderColor: error ? "tomato" : "",
          color: error ? "tomato" : "",
          boxShadow: error ? "0 0 0 1px tomato" : "",
        }}
        onKeyPress={(e) =>
          e.key === "Enter" ? handleNavigation() : isNumber(e)
        }
        onChange={(e) => {
          setCep(e.target.value);
          setError(false);
        }}
      />
      {error && (
        <strong className="error">
          Por favor, preencha o campo corretamente.
        </strong>
      )}

      <button className={styles.button} onClick={handleNavigation}>
        Buscar
      </button>
    </div>
  );
};
