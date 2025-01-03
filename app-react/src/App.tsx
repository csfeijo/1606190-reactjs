import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MenuCustom from "./Components/Menu/Menu.styled";
import Home from "./Pages/Home";
import FormularioCustom from "./Pages/Formulario/Formulario.styled";
import ListagemCustom from "./Pages/Listagem/Listagem.styled";
import ListagemDetalhes from "./Pages/ListagemDetalhes";
import PrefContext from "./Context/generalContext";

const App = () => {
  const [tema, setTema] = useState("light");

  return (
    <div className={tema}>
      <PrefContext.Provider value={{ tema, setTema }}>
        <BrowserRouter>
          <MenuCustom />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/formulario" element={<FormularioCustom />} />

              <Route path="/listagem">
                <Route index element={<ListagemCustom />} />
                <Route path=":id" element={<ListagemDetalhes />} />
              </Route>

              <Route path="*" element={<h1>404 - NÃO ENCONTRADO</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </PrefContext.Provider>
    </div>
  );
};

export default App;
