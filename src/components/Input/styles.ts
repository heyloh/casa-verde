import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100%;
  svg {
    margin: 0 1rem;
  }

  input {
    border: none;
    background: white;
    height: 100%;
    width: 100%;
    ::placeholder {
      opacity: 0.3;
    }
  }
`
