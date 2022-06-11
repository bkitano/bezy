import { Curve, Wave } from "./Components/Curve";
import { Grid } from "./Components/Grid";

const App = () => {
  const periods = 5;
  const scale_x = 100;
  const scale_y = 100;
  const offset_x = 5;
  const offset_y = 5;
  const lineCount = 20;
  const lineGap = 20;

  const pixelSpacing = 50;

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
          </g>
        </svg> */}
      <svg width="1100px" height="1100px" viewBox="0 0 1100 1100">
        <Grid
          {...{
            start_x: 0,
            start_y: 0,
            end_x: 1000,
            end_y: 1000,
            spacing: pixelSpacing,
          }}
        />
        <Moire
          {...{
            pixelSpacing,
            periods: 5,
            teeth: 100,
          }}
        />
        <g transform="rotate(5)">
          <Moire
            {...{
              pixelSpacing,
              periods: 5,
              teeth: 100,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

const Moire = (props: {
  pixelSpacing: number;
  periods: number;
  teeth: number;
}) => {
  const { pixelSpacing, teeth, periods } = props;
  return (
    <g>
      {Array.from(Array(teeth)).map((_, i) => {
        return (
          <Wave
            {...{
              offset_x: pixelSpacing / 2,
              offset_y: pixelSpacing / 2 + pixelSpacing * (0.1 * i),
              wavelength: Math.PI * pixelSpacing,
              amplitude: pixelSpacing,
              periods,
            }}
          />
        );
      })}
    </g>
  );
};

export default App;
