import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export const SearchCep = () => {
  const [cep, setCep] = React.useState("");
  const [data, setData] = React.useState("");
  const navigate = useNavigate();

  const handleFetch = () => {
    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
      .then((res) => res.json())
      .then((body) => setData(body))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    if (data) {
      navigate("/busca/" + cep);
      setData("");
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="cep">
        Digite um CEP:
      </label>
      <input
        className={styles.input}
        type="number"
        placeholder="Somente números"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button className={styles.button} onClick={handleFetch}>
        Buscar
      </button>
    </div>
  );
};
