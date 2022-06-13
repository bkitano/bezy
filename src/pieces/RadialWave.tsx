import { Moire } from "../Components/Moire";
import { Radial } from "../Components/Radial";
import { DiagonalPath } from "../paths/Diagonal";

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
        <DiagonalPath />
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
