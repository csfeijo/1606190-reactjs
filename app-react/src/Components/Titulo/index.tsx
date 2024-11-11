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
      <h1>{nome}</h1>
    </>
  );
};

export default Titulo;
