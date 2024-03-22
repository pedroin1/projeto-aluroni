import styled from 'styled-components'

type PropsButton = {
  ativo: boolean
}

export const FiltrosContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const ButtonStyled = styled.button<PropsButton> `
  align-items: center;
  background-color: ${(props) => props.ativo ? "#7090d3" : "#E4E4E4"};
  color: ${(props) => props.ativo ? "white" : ""};
  border: none;
  border-radius: 4px;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 100px;

    &:hover {
      cursor: pointer;
    }
`;
