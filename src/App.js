import logo from './logo.svg';
import { Navigation} from './Components/Main/Navigation';
import { HomePage }from './Components/Main/HomePage';
import { Stack }from './Components/Main/Stack';

// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Stack/>
      
    </div>
  );
}

export default App;
