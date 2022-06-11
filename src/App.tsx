import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h1>
        Moire Stuff
      </h1>
      <Link to="/circles">Circles</Link>
      <br />
      <Link to="/three-circles">Circles</Link>
      <br />
      <Link to="/circle-wave">Circle Wave</Link>
      <br />
      <Link to="/waves">Waves</Link>
    </div>
  );
};

export default App;
