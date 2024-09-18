import { ColumnContainer, ColumnTitle, CardContainer } from '../styles';

type ColumnProps = {
  text: string;
};

const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate App</CardContainer>
      <CardContainer>Learn Typescript</CardContainer>
      <CardContainer>Use static typing</CardContainer>
    </ColumnContainer>
  );
};

export default Column;
