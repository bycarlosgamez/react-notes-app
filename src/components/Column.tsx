import { ColumnContainer, ColumnTitle } from '../styles';
import Card from './Card';

type ColumnProps = {
  text: string;
};

const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text='Generate App' />
      <Card text='Learn Typescript' />
      <Card text='Use static typing' />
    </ColumnContainer>
  );
};

export default Column;
