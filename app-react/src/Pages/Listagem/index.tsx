import { Link, useNavigate } from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";

interface ListagemInterface {
  className?: string;
}

const Listagem = ({ className }: ListagemInterface) => {
  const navigate = useNavigate();
  // Estrutura de teste: normalmente conhecido como "mock" ou "mockup"
  const items = [
    {
      id_departamento: 1,
      nome: "Recursos Humanos",
      sigla: "RH",
    },
    {
      id_departamento: 2,
      nome: "Financeiro",
      sigla: "FINANC",
    },
    {
      id_departamento: 3,
      nome: "Contabilidade",
      sigla: "CONTAB",
    },
  ];

  return (
    <>
      <h1>Listagem</h1>
      <BotaoCustom
        severity="primary"
        label="&laquo; voltar"
        onClick={() => {
          navigate("/");
        }}
      />

      <table className={className}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>
                  <Link to={item.id_departamento.toString()}>{item.nome}</Link>
                </td>
                <td>{item.sigla}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listagem;
