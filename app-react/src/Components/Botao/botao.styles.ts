import styled from "styled-components";

interface StyledButtonProps {
  severity: "primary" | "secondary" | "danger" | "warning";
}

const getSeverityCSS = (severity: string) => {
  switch (severity) {
    case "primary":
      return "#0096D6";
    case "warning":
      return "#FF9900";
    case "danger":
      return "#FF0000";
    case "secondary":
      return "green";
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  color: white;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid black;
  margin: 2px;

  background: ${(props) => getSeverityCSS(props.severity)};
`;

export default StyledButton;
