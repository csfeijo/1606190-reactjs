import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MenuCustom from "./Components/Menu/Menu.styled";
import Home from "./Pages/Home";
import FormularioCustom from "./Pages/Formulario/Formulario.styled";
import ListagemCustom from "./Pages/Listagem/Listagem.styled";

const App = () => {
  return (
    <BrowserRouter>
      <MenuCustom />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<FormularioCustom />} />
          <Route path="/listagem" element={<ListagemCustom />} />
          <Route path="*" element={<h1>404 - NÃO ENCONTRADO</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
