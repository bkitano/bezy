import { TwoWaves } from "./pieces/TwoWaves";

const App = () => {
  const pixelSpacing = 50;

  return (
    <div className="App">
      <svg width="1100px" height="1100px" viewBox="0 0 1100 1100">
        {/* <Grid
          {...{
            start_x: 0,
            start_y: 0,
            end_x: 1000,
            end_y: 1000,
            spacing: pixelSpacing,
          }}
        /> */}
        <TwoWaves {...{ pixelSpacing }} />
      </svg>
    </div>
  );
};

export default App;
