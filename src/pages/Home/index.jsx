import { Main } from "../../components/Main";
import { SearchCep } from "../../components/SearchCep";
import { Title } from "../../components/Title";

export const Home = () => {
  return (
    <Main>
      <Title text="BuscaCEP Brasil" />
      <SearchCep />
    </Main>
  );
};
