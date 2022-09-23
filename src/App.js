
import './App.css';
import {Provider} from 'react-redux/es/exports';
import store from './Store/Store';
import AddData from '../src/AddData';
function App() {
  return (
    <Provider  store={store}>
      <AddData/>
    </Provider>
  ); 
}

export default App;
