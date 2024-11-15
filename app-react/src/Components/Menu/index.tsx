import { Link } from "react-router-dom";
interface MenuInterface {
  className?: string;
}

const Menu = ({ className }: MenuInterface) => {
  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <Link to="/formulario">Formulário</Link>
      <Link to="/listagem">Listagem</Link>
    </nav>
  );
};

export default Menu;
