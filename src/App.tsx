import { AppContainer } from './styles';

import Column from './components/Column';
import AddNewItem from './components/AddNewItem';

function App() {
  return (
    <AppContainer>
      <Column text='Todo:' />
      <AddNewItem
        toogleButtonText='+ Add another list'
        onAdd={() => console.log('Item created')}
      />
    </AppContainer>
  );
}

export default App;
