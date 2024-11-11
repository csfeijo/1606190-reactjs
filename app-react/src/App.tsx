import React, { useState } from "react";
import "./App.scss";
import Titulo from "./Components/Titulo";

interface OpcaoCursoProps {
  item: string;
  index: number;
}

const App = () => {
  const [curso, setCurso] = useState("Nenhum curso selecionado");

  const handlerCurso = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(evt.target.value);
  };

  const cursos = ["ReactJS", "NodeJS", "CSS & JS Pro"];

  const OpcaoCurso = ({ item, index }: OpcaoCursoProps) => (
    <React.Fragment key={index}>
      <label>
        <input type="radio" name="curso" value={item} onChange={handlerCurso} />
        {item}
      </label>
      <br />
    </React.Fragment>
  );

  return (
    <>
      <h1>Exercício</h1>

      <Titulo nome={curso} />

      {cursos.map((item, index) => {
        return <OpcaoCurso item={item} index={index} />;
      })}
    </>
  );
};

export default App;
