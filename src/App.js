import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";

function App() {

  const hello = "Доброго вечора!!!"
  const hello1 = {a:1,s:4};


  return (
    <div className="App">

      <Header text={hello} color={"green"} />
      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{hello}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
