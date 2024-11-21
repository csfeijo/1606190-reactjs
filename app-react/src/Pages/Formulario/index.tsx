import { useState } from "react";
import BotaoCustom from "../../Components/Botao/botao.styled";
interface InterfaceFormulario {
  className?: string;
}

const Formulario = ({ className }: InterfaceFormulario) => {
  const [nome, setNome] = useState("TT");
  const [sigla, setSigla] = useState("");
  const [mensagem, setMensagem] = useState("");

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
          onClick={() => {
            setMensagem("");

            if (nome === "") {
              setMensagem("Preencha o nome corretamente");
              return;
            }

            if (sigla === "") {
              setMensagem("Preencha a sigla corretamente");
              return;
            }
          }}
        />
      </div>

      {mensagem !== "" && <div className="mensagem">{mensagem}</div>}
    </div>
  );
};

export default Formulario;
