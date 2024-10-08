import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  background-color: #e8e8e8;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 16px 16px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: #091e4240 opx 1px 0px 0px;
`;

type AddItemButtonProps = {
  newCard?: boolean;
};

export const AddItemBotton = styled.button<AddItemButtonProps>`
  background-color: #1a1a1a3d;
  /* #ffffff3d */
  border-radius: 10px;
  border: 1px solid transparent;
  color: ${(props) => (props.newCard ? '000' : '#FFF')};
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  padding: 0.6em 1.2em;
  text-align: left;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
