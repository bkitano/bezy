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
        <rect
          {...{
            x: 0,
            y: 550,
            width: 530,
            height: 530,
            fill: "lightgreen",
            stroke: "green",
            strokeWidth: 20,
          }}
        />
        <rect
          {...{
            x: 550,
            y: 550,
            width: 530,
            height: 530,
            fill: "lightyellow",
            stroke: "yellow",
            strokeWidth: 20,
          }}
        />
        <rect
          {...{
            x: 0,
            y: 0,
            width: 530,
            height: 530,
            fill: "lightblue",
            stroke: "blue",
            strokeWidth: 20,
          }}
        />
        <rect
          {...{
            x: 550,
            y: 0,
            width: 530,
            height: 530,
            fill: "pink",
            stroke: "red",
            strokeWidth: 20,
          }}
        />
        {/* <rect
          {...{
            x: 0,
            y: 0,
            width: 1100,
            height: 1100,
            fill: "red",
          }}
        /> */}
      </svg>
    </div>
  );
};

export default App;
