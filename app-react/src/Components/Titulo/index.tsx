import { StyledTitulo, StyledFooter } from "./titulo.styled";
interface TituloProps {
  nome: string;
}
// Pode ser tipado de duas formas:
// Mais complexa
// const Titulo: React.FC<TituloProps> = ({ nome, data, descricao }) => {
// Mais simples (ambas estão corretas):
const Titulo = ({ nome }: TituloProps) => {
  return (
    <>
      <StyledTitulo>
        <div>{nome}</div>
      </StyledTitulo>
      <StyledFooter>&copy; targettrust</StyledFooter>
    </>
  );
};

export default Titulo;
