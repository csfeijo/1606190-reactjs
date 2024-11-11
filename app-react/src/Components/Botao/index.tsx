// import "./botao.scss";
import StyledButton from "./botao.styles";

interface BotaoProps {
  label: string;
  severity: "primary" | "secondary" | "danger" | "warning";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Botao = ({ label, severity, onClick }: BotaoProps) => {
  return (
    <>
      {/* <button className={severity} onClick={onClick}>
        {label}
      </button> */}
      <StyledButton onClick={onClick} severity={severity}>
        {label}
      </StyledButton>
    </>
  );
};

export default Botao;
