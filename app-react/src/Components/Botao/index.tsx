import "./botao.scss";

interface BotaoProps {
  label: string;
  severity: "danger" | "primary" | "secondary" | "warning";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Botao = ({ label, severity, onClick }: BotaoProps) => {
  return (
    <>
      <button className={severity} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Botao;
