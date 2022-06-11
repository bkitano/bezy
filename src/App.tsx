import { useEffect, useState } from "react";
import { Curve, Wave } from "./Components/Curve";
import { Grid } from "./Components/Grid";

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
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 550 550"
            // from="0 0 0"
            to="0 550 550"
            // to="360 0 0"
            dur="1500s"
            repeatCount="indefinite"
          />
          <Moire
            {...{
              pixelSpacing,
              periods: 5,
              teeth: 1000,
              amplitude: Math.random() * pixelSpacing,
              wavelength: (3 + Math.random()) * pixelSpacing,
            }}
          />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 550 550"
            // from="0 0 0"
            to="360 550 550"
            // to="360 0 0"
            dur="1500s"
            repeatCount="indefinite"
          />
          <g transform="rotate(20)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 20"
              to="0 200"
              dur="180s"
              repeatCount="indefinite"
            />
            <Moire
              {...{
                pixelSpacing,
                periods: 10,
                teeth: 1000,
                // amplitude: pixelSpacing * 0.5,
                amplitude: Math.random() * pixelSpacing,
                wavelength: (3 + Math.random()) * pixelSpacing,
                combDistance: 0.05 + 0.2 * Math.random(),
              }}
            />
          </g>
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
  combDistance?: number;
}) => {
  const {
    pixelSpacing,
    teeth,
    periods,
    wavelength = Math.PI * pixelSpacing,
    amplitude = pixelSpacing,
    combDistance = 0.1,
  } = props;
  return (
    <g>
      {Array.from(Array(teeth)).map((_, i) => {
        return (
          <Wave
            {...{
              offset_x: pixelSpacing / 2,
              offset_y: pixelSpacing / 2 + pixelSpacing * (combDistance * i),
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
