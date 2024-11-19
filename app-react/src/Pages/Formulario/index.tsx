import BotaoCustom from "../../Components/Botao/botao.styled";
interface InterfaceFormulario {
  className?: string;
}

const Formulario = ({ className }: InterfaceFormulario) => {
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
            placeholder="Seu nome"
          />
        </label>
      </div>

      <div>
        <label>
          IDADE:
          <br />
          <input
            type="number"
            name="idade"
            id="idade"
            min={14}
            max={99}
            placeholder="Sua idade"
          />
        </label>
      </div>

      <div>
        <BotaoCustom severity="primary" label="ENVIAR" />
      </div>
    </div>
  );
};

export default Formulario;
