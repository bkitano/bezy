import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h1>Moire Stuff</h1>
      <Link to="/circles">Circles</Link>
      <br />
      <Link to="/three-circles">Three Circles</Link>
      <br />
      <Link to="/circle-wave">Circle Wave</Link>
      <br />
      <Link to="/waves">Waves</Link>
      <br />
      <Link to="/three-waves">Three Waves</Link>
      <br />
      <Link to="/radial-wave">Radial Wave</Link>
      <br />
      <Link to="/radial-circle">Radial Circle</Link>
    </div>
  );
};

export default App;
