import { Link } from "react-router-dom";
import { useContext } from "react";
import PrefContext from "../../Context/generalContext";

interface MenuInterface {
  className?: string;
}

const Menu = ({ className }: MenuInterface) => {
  const prefs = useContext(PrefContext);
  console.log(prefs);
  return (
    <>
      <nav className={className}>
        <Link to="/">Home</Link>
        <Link to="/formulario">Formulário</Link>
        <Link to="/listagem">Listagem</Link>
      </nav>
      <span>{prefs.tema}</span>
    </>
  );
};

export default Menu;
