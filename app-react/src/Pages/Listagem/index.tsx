import { Link } from "react-router-dom";

interface ListagemInterface {
  className?: string;
}

const Listagem = ({ className }: ListagemInterface) => {
  return (
    <>
      <h1>Listagem</h1>

      <table className={className}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Link to="789">Recursos Humanos</Link>
            </td>
            <td>RH</td>
          </tr>
          <tr>
            <td>Recursos Humanos</td>
            <td>RH</td>
          </tr>
          <tr>
            <td>Recursos Humanos</td>
            <td>RH</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Listagem;
