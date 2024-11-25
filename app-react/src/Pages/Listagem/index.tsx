import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";
import api from "../../Services/api";
import PrefContext from "../../Context/generalContext";
interface ListagemInterface {
  className?: string;
}

type Departamento = {
  id_departamento: number;
  nome: string;
  sigla: string;
};

const Listagem = ({ className }: ListagemInterface) => {
  const [items, setItems] = useState<Departamento[]>([]);
  const navigate = useNavigate();
  const { tema, setTema } = useContext(PrefContext);

  useEffect(() => {
    const listaDepartamentos = async () => {
      try {
        const result = await api.get("/departamentos");
        setItems(result.data);
      } catch (e) {
        console.log("DEU PAU NA API");
      }
    };
    if (items.length === 0) {
      listaDepartamentos();
    }
  }, [items]);

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
      <BotaoCustom
        label="troca tema"
        severity="danger"
        onClick={() => {
          setTema("dark");
        }}
      />
    </>
  );
};

export default Listagem;
