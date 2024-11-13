interface MenuInterface {
  className?: string;
}

const Menu = ({ className }: MenuInterface) => {
  return (
    <nav className={className}>
      <a href="#">Home</a>
      <a href="#">Formulário</a>
      <a href="#">Listagem</a>
    </nav>
  );
};

export default Menu;
