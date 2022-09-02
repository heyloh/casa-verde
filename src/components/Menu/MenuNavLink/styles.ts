import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const NavLink = styled.a`
  color: ${theme.colors.darkText};
  font-size: 1rem;
  font-weight: 500;

  & + & {
    &::before {
      content: '/';
      margin: 0 1rem;
    }
  }

  &:hover {
    color: ${theme.colors.green};
    transition: all 0.3s;
  }
`
