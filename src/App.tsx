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
        <Moire
          {...{
            pixelSpacing,
            periods: 5,
            teeth: 1000,
          }}
        />
        <g transform="rotate(20)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 70"
            to="360 60 70"
            dur="150s"
            repeatCount="indefinite"
          ></animateTransform>
          <Moire
            {...{
              pixelSpacing,
              periods: 10,
              teeth: 1000,
              amplitude: pixelSpacing * 0.5,
              wavelength: pixelSpacing * 1.3,
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
  wavelength?: number;
  amplitude?: number;
}) => {
  const {
    pixelSpacing,
    teeth,
    periods,
    wavelength = Math.PI * pixelSpacing,
    amplitude = pixelSpacing,
  } = props;
  return (
    <g>
      {Array.from(Array(teeth)).map((_, i) => {
        return (
          <Wave
            {...{
              offset_x: pixelSpacing / 2,
              offset_y: pixelSpacing / 2 + pixelSpacing * (0.1 * i),
              wavelength,
              amplitude,
              periods,
            }}
          />
        );
      })}
    </g>
  );
};

export default App;
