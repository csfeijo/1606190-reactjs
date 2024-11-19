import styled from "styled-components";
import Botao from ".";

// Aqui ao inves de levarmos o nosso styled para o componente
// Iremos trazer o componente para dentro do style
// - O componente já tá implementado!
const BotaoCustom = styled(Botao)`
  color: white;
  display: inline-block;
  border: 1px solid #000000;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid black;
  margin: 2px;

  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 8px 0px #999;
  }

  &.primary {
    background: #0096d6;
  }
  &.warning {
    background: #ff9900;
  }
  &.danger {
    background: #ff0000;
  }
  &.secondary {
    background: green;
  }
`;

export default BotaoCustom;
