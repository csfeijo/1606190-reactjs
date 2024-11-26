import { useContext } from "react";
import PrefContext from "../../Context/generalContext";
import BotaoCustom from "../../Components/Botao/botao.styled";

const Home = () => {
  const prefs = useContext<any>(PrefContext);

  return (
    <>
      <h1>HOME</h1>
      <h2>Bem vindo</h2>
      <hr />
      <h3>{prefs.tema}</h3>
      <BotaoCustom
        severity="secondary"
        label="Troca o tema"
        onClick={() => {
          prefs.setTema("dark");
        }}
      />
    </>
  );
};

export default Home;
