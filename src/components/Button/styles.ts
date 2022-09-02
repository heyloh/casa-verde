import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonStyles = styled.button`
  height: 75px;
  min-width: 200px;
  font-size: 1rem;
  color: white;
  border: none;
  background: ${theme.colors.yellow};
  box-shadow: ${theme.shadows.yellow};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`
