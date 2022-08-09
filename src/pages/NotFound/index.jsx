import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Container } from "../../components/Container";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title text="Página não encontrada 🤷" />
      <button onClick={() => navigate("/")}>Voltar para página inicial</button>
    </Container>
  );
};
