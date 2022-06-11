import { Circle } from "../Components/Circle";
import { Moire } from "../Components/Moire";

const CircleWave = ({
  pixelSpacing,
  combDistance,
}: {
  pixelSpacing: number;
  combDistance: number;
}) => {
  return (
    <g>
      <g>
        <animateTransform
          {...{
            attributeName: "transform",
            type: "translate",
            to: "1000 1000",
            dur: "150s",
            repeatCount: "indefinite",
          }}
        />
        <Circle
          {...{
            pixelSpacing,
            combDistance,
            cx: 100,
            cy: 100,
          }}
        />
      </g>
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
    </g>
  );
};

export { CircleWave };
