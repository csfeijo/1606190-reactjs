import "./App.css";
import Titulo from "./Components/Titulo";
import Placeholder from "./Components/Placeholder";

const App = () => {
  return (
    <>
      <Titulo
        nome="ReactJS"
        descricao="curso introdutório"
        data={new Date(2024, 11, 5)}
      >
        <Placeholder />
      </Titulo>

      <Titulo
        nome="ReactJS"
        descricao="curso introdutório"
        data={new Date(2024, 11, 5)}
      >
        <div>ola pessoal! aula 02</div>
      </Titulo>

      <h1>Aula 02</h1>
    </>
  );
};

export default App;
