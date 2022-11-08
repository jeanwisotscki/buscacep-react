import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as Components from "../../components";

import styles from "./index.module.css";

export const SearchCep = () => {
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const params = useParams("/busca/:cep");
  const { cep } = params;

  React.useEffect(() => {
    setLoading(true);

    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
      .then((res) => res.json())
      .then((body) => {
        setLoading(false);
        if (body.erro) return setError(true);

        setData(body);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

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
