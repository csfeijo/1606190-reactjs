import { useEffect, useState } from "react";
import "./App.scss";
import Titulo from "./Components/Titulo";
import Placeholder from "./Components/Placeholder";
import Botao from "./Components/Botao";

const App = () => {
  // destructuring
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (numero !== 0) {
      console.log("Entrou no effect do numero");
    }
  }, [numero]);

  useEffect(() => {
    if (nome !== "") {
      console.log("Entrou no effect do nome");
    }
  }, [nome]);

  return (
    <>
      {nome !== "" && <p>Você está logado como {nome}</p>}
      <h1>{numero}</h1>
      <Titulo
        nome="ReactJS"
        descricao={`curso introdutório ${numero}`}
        data={new Date(2024, 11, 5)}
      >
        <Placeholder />
      </Titulo>

      <h1>Aula 03</h1>

      {nome !== "" && <h4>Bem vindo, {nome}</h4>}

      <Botao label="Primário" severity="primary" />

      <Botao
        label="Bota o nome"
        severity="warning"
        onClick={() => {
          setNome("Cícero Feijó");
        }}
      />

      <Botao
        label="-1"
        severity="danger"
        onClick={() => {
          setNumero(numero - 1);
        }}
      />
      <Botao
        label="+1"
        severity="danger"
        onClick={() => {
          setNumero(numero + 1);
        }}
      />
    </>
  );
};

export default App;
