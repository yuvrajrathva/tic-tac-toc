import logo from './logo.svg';
import './App.css';
import Ground from "./Ground";

function App() {
  return (
      <div className="main-container">
        <div className="main-title">
          <h1>Tic-Tac-Toc</h1>
        </div>
        <div className="main-playGround">
          <Ground />
        </div>
      </div>
  );
}

export default App;
