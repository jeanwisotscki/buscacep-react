import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as Components from "../../components";

import styles from "./index.module.css";

export const SearchCep = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const params = useParams("/busca/:cep");
  const { cep } = params;

  const handleFetch = () => {
    const URL = `https://viacep.com.br/ws/${cep}/json`;

    setLoading(true);

    fetch(URL)
      .then((res) => res.json())
      .then((body) => {
        if (body.erro) return setError(true);

        setData(body);
        setLoading(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  React.useEffect(() => handleFetch, []);

  return (
    <Components.Container>
      {loading ? (
        <Components.Loading />
      ) : error ? (
        <h1 className={styles.h1}>Não encontramos esse CEP 🤷 </h1>
      ) : (
        <div className={styles.addressContainer}>
          <span className={styles.span}>Localidade</span>
          <p className={styles.paragraph}>
            {data.localidade ? data.localidade : "Não contém"}
          </p>

          <span className={styles.span}>Logradouro</span>
          <p className={styles.paragraph}>
            {data.logradouro ? data.logradouro : "Não contém"}
          </p>

          <span className={styles.span}>Bairro</span>
          <p className={styles.paragraph}>
            {data.bairro ? data.bairro : "Não contém"}
          </p>

          <span className={styles.span}>UF</span>
          <p className={styles.paragraph}>{data.uf ? data.uf : "Não contém"}</p>

          <span className={styles.span}>CEP</span>
          <p className={styles.paragraph}>
            {data.cep ? data.cep : "Não contém"}
          </p>
        </div>
      )}

      <button className={styles.button} onClick={() => navigate("/")}>
        Nova busca
      </button>
    </Components.Container>
  );
};
