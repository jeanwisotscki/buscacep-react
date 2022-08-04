import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Main } from "../../components/Main";

import styles from "./index.module.css";

export const Busca = () => {
  const [data, setData] = React.useState("");
  const navigate = useNavigate();

  const params = useParams("resultado/:cep");
  const { cep } = params;

  React.useEffect(() => {
    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
      .then((res) => res.json())
      .then((body) => setData(body))
      .catch((err) => console.log(err));
  }, [cep]);

  return (
    <Main>
      <div className={styles.addressContainer}>
        <span className={styles.span}>Localidade</span>
        <p className={styles.paragraph}> {data.localidade} </p>
        <span className={styles.span}>Logradouro</span>
        <p className={styles.paragraph}> {data.logradouro} </p>
        <span className={styles.span}>Bairro</span>
        <p className={styles.paragraph}> {data.bairro} </p>
        <span className={styles.span}>UF</span>
        <p className={styles.paragraph}> {data.uf} </p>
        <span className={styles.span}>CEP</span>
        <p className={styles.paragraph}> {data.cep} </p>
      </div>
      <button className={styles.button} onClick={() => navigate("/")}>
        Nova busca
      </button>
    </Main>
  );
};
