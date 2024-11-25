import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoCustom from "../../Components/Botao/botao.styled";
import api from "../../Services/api";
interface InterfaceFormulario {
  className?: string;
}

const Formulario = ({ className }: InterfaceFormulario) => {
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  return (
    <div className={className}>
      <h1>Formulário</h1>
      <div>
        <label>
          NOME:
          <br />
          <input
            type="text"
            name="nome"
            id="nome"
            maxLength={40}
            placeholder="Nome"
            value={nome}
            onChange={(evt) => {
              setNome(evt.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          SIGLA:
          <br />
          <input
            type="text"
            name="sigla"
            id="sigla"
            placeholder="Sigla"
            value={sigla}
            onChange={(evt) => {
              setSigla(evt.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <BotaoCustom
          severity="primary"
          label="SALVAR"
          onClick={async () => {
            setMensagem("");

            if (nome === "") {
              setMensagem("Preencha o nome corretamente");
              return;
            }

            if (sigla === "") {
              setMensagem("Preencha a sigla corretamente");
              return;
            }

            //Só vou chegar se tiver passado tudo OK na validacao
            try {
              await api.post("/departamentos", {
                nome,
                sigla,
              });
              // Redirecionar o usuario para a lista
              navigate("/listagem");
            } catch (e: any) {
              const erro = e.response?.data?.message;

              setMensagem(`[${erro}] Nome ou Sigla já existentes.`);
            }
          }}
        />
      </div>

      {mensagem !== "" && <div className="mensagem">{mensagem}</div>}
    </div>
  );
};

export default Formulario;
