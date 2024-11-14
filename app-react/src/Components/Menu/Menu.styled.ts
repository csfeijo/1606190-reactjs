import styled from "styled-components";
import Menu from ".";
import Tokens from "../../assets/Tokens";

const MenuCustom = styled(Menu)`
  display: flex;
  gap: 20px;
  /* Exemplo usando Design Tokens (extra) */
  background-color: ${Tokens.bgColor};
  /* Exemplo no formato tradicional */
  /* background-color: #2c3e50; Azul escuro elegante */
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  a {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #ecf0f1; /* Cinza claro para contraste suave */
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover,
    &:focus {
      color: #2c3e50; /* Texto no mesmo azul do fundo do menu */
      background-color: #ecf0f1; /* Fundo claro para efeito inverso */
    }

    &.active {
      background-color: #3498db; /* Azul vibrante para destacar a página atual */
      color: #fff;
      font-weight: 600;
    }
  }
`;

export default MenuCustom;
