import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <nav className="Nav">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>ReactFacts</h3>
        <h4>React course project-1</h4>
      </nav>
      <main>
        <h1> Fun fact about React </h1>
        <ul>
          <li>It is first released in 2013</li>
          <li>It is first released in 2013</li>
          <li>It is first released in 2013</li>
          <li>It is first released in 2013</li>
          <li>It is first released in 2013</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
