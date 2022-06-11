import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Link to="/circles">Circles</Link>
      <br />
      <Link to="/circle-wave">Circle Wave</Link>
      <br />
      <Link to="/waves">Waves</Link>
    </div>
  );
};

export default App;
