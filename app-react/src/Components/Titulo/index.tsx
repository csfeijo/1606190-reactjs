interface TituloProps {
  nome: string;
  descricao?: string;
  data: Date;
  children?: React.ReactNode;
}
// Pode ser tipado de duas formas:
// Mais complexa
// const Titulo: React.FC<TituloProps> = ({ nome, data, descricao }) => {
// Mais simples (ambas estão corretas):
const Titulo = ({ nome, data, descricao, children }: TituloProps) => {
  return (
    <>
      <h1>Curso de {nome}</h1>
      <h2>{data.toLocaleDateString()}</h2>
      {descricao}
      {children}
    </>
  );
};

export default Titulo;
