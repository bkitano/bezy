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

  const spacing = 50;

  return (
    <div className="App">
      {/* <svg width={periods * scale_x} height={periods * scale_y}>
        <g offset={5}>
          <Grid
            {...{
              end_x: periods * scale_x,
              end_y: periods * scale_y,
            }}
          />
          <Curve
            {...{
              offset_x: 0,
              offset_y: 0,
              period: scale_x,
              amplitude: scale_y,
            }}
          />
        </g>
      </svg> */}
      <svg width="1100px" height="1100px" viewBox="0 0 1100 1100">
        <Grid
          {...{
            start_x: 0,
            start_y: 0,
            end_x: 1000,
            end_y: 1000,
            spacing,
          }}
        ></Grid>
      </svg>
    </div>
  );
};

export default App;
