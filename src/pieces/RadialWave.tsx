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
            periods: 5,
            teeth: 250,
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
        <Radial {...{
            cx: 0,
            cy: 0,
            r: 20
        }} />
      </g>
    </g>
  );
};

export { RadialWave };
