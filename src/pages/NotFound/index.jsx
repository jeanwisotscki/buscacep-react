import { useNavigate } from "react-router-dom";

import { Main } from "../../components/Main";
import { Title } from "../../components/Title";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Title text="Página não encontrada 🤷" />
      <button onClick={() => navigate("/")}>Voltar para página inicial</button>
    </Main>
  );
};
