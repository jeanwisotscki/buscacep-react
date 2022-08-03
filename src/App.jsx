import { Main } from "./components/Main";
import { SearchCep } from "./components/SearchCep";
import { Title } from "./components/Title";

export const App = () => {
  return (
    <Main>
      <Title text="BuscaCEP Brasil" />
      <SearchCep />
    </Main>
  );
};
