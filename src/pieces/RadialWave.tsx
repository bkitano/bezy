import { Moire } from "../Components/Moire";
import { Radial } from "../Components/Radial";

const RadialWave = ({
  pixelSpacing,
  combDistance,
}: {
  pixelSpacing: number;
  combDistance: number;
}) => {
  return (
    <g>
      <g>
        <Moire
          {...{
            pixelSpacing,
            combDistance,
            amplitude: Math.random() * pixelSpacing,
            wavelength: 3 * Math.random() * pixelSpacing,
          }}
        />
      </g>
      <g>
        <animateMotion
          {...{
            dur: "90s",
            path: "M 0 0 L 700 700 Z",
            repeatCount: "indefinite",
          }}
        />
        <Radial
          {...{
            cx: 0,
            cy: 0,
            r: 20,
          }}
        />
      </g>
    </g>
  );
};

export { RadialWave };
