
import './App.css';
import Link from './components/Link';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Link/>

      </header>
      <ToastContainer
      position="top-center"
      />
    </div>
  );
}

export default App;
