import { Title } from "../../components/Title";
import { InputCep } from "../../components/InputCep";
import { Container } from "../../components/Container";

export const Home = () => {
  return (
    <Container>
      <Title text="BuscaCEP Brasil" />
      <InputCep />
    </Container>
  );
};
