import { Curve } from "./Components/Curve";
import { Grid } from "./Components/Grid";

const App = () => {
  const periods = 5;
  const scale_x = 100;
  const scale_y = 100;
  const offset_x = 5;
  const offset_y = 5;
  const lineCount = 20;
  const lineGap = 20;

  return (
    <div className="App">
      <svg
        width={periods * scale_x + offset_x}
        height={periods * scale_y + offset_y}
      >
        <Grid
          {...{
            end_x: periods * scale_x + offset_x,
            end_y: periods * scale_y + offset_y,
          }}
        />
        <Curve
          {...{
            offset_x,
            offset_y,
            period: scale_x,
            amplitude: scale_y,
          }}
        />
      </svg>
    </div>
  );
};

export default App;
