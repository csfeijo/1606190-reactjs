import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MenuCustom from "./Components/Menu/Menu.styled";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <MenuCustom />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<h1>FORMULÁRIO</h1>} />
        <Route path="/listagem" element={<h1>LISTAGEM</h1>} />

        <Route path="*" element={<h1>404 - NÃO ENCONTRADO</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
