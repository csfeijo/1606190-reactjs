import BotaoCustom from "../../Components/Botao/botao.styled";
import { StyledTitulo, StyledInput } from "./Formulario.styled";

const Formulario = () => {
  return (
    <>
      <StyledTitulo>Formulário</StyledTitulo>
      <div>
        <label>
          NOME:
          <br />
          <StyledInput
            type="text"
            name="nome"
            id="nome"
            maxLength={40}
            placeholder="Seu nome"
          />
        </label>
      </div>

      <div>
        <label>
          IDADE:
          <br />
          <StyledInput
            type="number"
            name="idade"
            id="idade"
            min={14}
            max={99}
            placeholder="Sua idade"
          />
        </label>
      </div>

      <BotaoCustom severity="primary" label="ENVIAR" />
    </>
  );
};

export default Formulario;
