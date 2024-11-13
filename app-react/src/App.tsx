import React, { useState } from "react";
import "./App.scss";
import Titulo from "./Components/Titulo";
import BotaoCustom from "./Components/Botao/botao.styled";
import MenuCustom from "./Components/Menu/menu.styled";

interface OpcaoCursoProps {
  item: string;
}

const App = () => {
  const [curso, setCurso] = useState("Nenhum curso selecionado");

  const handlerCurso = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(evt.target.value);
  };

  const cursos = ["ReactJS", "NodeJS", "CSS & JS Pro"];

  const OpcaoCurso = ({ item }: OpcaoCursoProps) => (
    <>
      <label>
        <input
          type="radio"
          name={curso}
          value={item}
          onChange={handlerCurso}
          checked={curso == item}
        />
        {item}
      </label>
      <br />
    </>
  );

  return (
    <>
      <MenuCustom />
      <h1>Exercício</h1>
      <Titulo nome={curso} />

      <hr />

      {cursos.map((item, index) => {
        return <OpcaoCurso item={item} key={index} />;
      })}

      <BotaoCustom severity="danger" label="Perigosao" />
    </>
  );
};

export default App;
