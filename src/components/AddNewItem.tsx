import { useState } from 'react';
import { AddItemBotton } from '../styles';

type AddNewItemProps = {
  onAdd(text: string): void;
  toogleButtonText: string;
  newCard?: boolean;
};

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toogleButtonText, newCard } = props;

  if (showForm) {
    // render form
  }

  return (
    <AddItemBotton newCard={newCard} onClick={() => setShowForm(true)}>
      {toogleButtonText}
    </AddItemBotton>
  );
};

export default AddNewItem;
