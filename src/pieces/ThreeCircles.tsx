import { Circle } from "../Components/Circle";

const ThreeCircles = ({
  pixelSpacing,
  combDistance,
  cx,
  cy,
}: {
  pixelSpacing: number;
  combDistance: number;
  cx?: number;
  cy?: number;
}) => {
  return (
    <g>
      <g>
        <Circle {...{ pixelSpacing, combDistance, cx: 550, cy: 650 }} />
      </g>
      <g>
        <animateTransform
          {...{
            attributeName: "transform",
            type: "translate",
            to: "0 500",
            dur: "30s",
            repeatCount: "indefinite",
          }}
        />
        <Circle {...{ pixelSpacing, combDistance, cx: 550, cy: 450 }} />
      </g>
      <g>
        <animateTransform
          {...{
            attributeName: "transform",
            type: "translate",
            to: "500 0",
            dur: "30s",
            repeatCount: "indefinite",
          }}
        />
        <Circle {...{ pixelSpacing, combDistance, cx: 250, cy: 450 }} />
      </g>
    </g>
  );
};

export { ThreeCircles };
