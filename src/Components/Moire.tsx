import useWindowDimensions from "../utils/useWindowDimensions";
import { Wave } from "./Curve";

const Moire = (props: {
  pixelSpacing: number;
  teeth?: number;
  periods?: number;
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

  const { width, height } = useWindowDimensions();
  const heightAdjustedTeeth = Math.ceil((height + amplitude) / (combDistance * pixelSpacing));
  const widthAdjustedPeriods = Math.ceil(width / wavelength);

  return (
    <g>
      {Array.from(Array(teeth ?? heightAdjustedTeeth)).map((_, i) => {
        return (
          <Wave
            {...{
              offset_y: pixelSpacing * (combDistance * i) - amplitude,
              wavelength,
              amplitude,
              periods: periods ?? widthAdjustedPeriods,
            }}
          />
        );
      })}
    </g>
  );
};

export { Moire };
