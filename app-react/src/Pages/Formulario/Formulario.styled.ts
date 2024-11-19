import styled from "styled-components";
import Formulario from ".";

const FormularioCustom = styled(Formulario)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: block;

    input {
      padding: 8px;
      border-radius: 4px;
      min-width: 200px;
      margin-top: 4px;
    }
  }
`;

export default FormularioCustom;
