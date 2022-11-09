import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

//
const correctLengthOfCep = 8;

const allowOnlyNumbers = (e) => {
  if (!/\d/.test(e.key)) return e.preventDefault();
};

export const Form = () => {
  const navigate = useNavigate();
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleNavigation = () => {
    if (cep.length === correctLengthOfCep) return navigate("/busca/" + cep);

    setError(true);
  };

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
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
          e.key === "Enter" ? handleNavigation() : allowOnlyNumbers(e)
        }
        onChange={(e) => {
          setCep(e.target.value);
          setError(false);
        }}
      />
      <div className={styles.errorContainer}>
        {error && (
          <strong className="error">
            Por favor, preencha o campo corretamente.
          </strong>
        )}
      </div>

      <button className={styles.button} onClick={handleNavigation}>
        Buscar
      </button>
    </form>
  );
};
