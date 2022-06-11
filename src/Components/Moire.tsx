import { Wave } from "./Curve";

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

export { Moire };
