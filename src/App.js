import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import ReactReduxCounter from './component/ReactReduxCounter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <ReactReduxCounter/>
    </div>
  );
}

export default App;
