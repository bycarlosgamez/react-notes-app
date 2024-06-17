import { ColumnContainer, ColumnTitle } from '../styles';
import AddNewItem from './AddNewItem';
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
      <AddNewItem
        toogleButtonText='+ Add new card'
        onAdd={() => console.log('Card created')}
      />
    </ColumnContainer>
  );
};

export default Column;
