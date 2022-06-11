import { Circle } from "../Components/Circle";

const TwoCircles = ({
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
        <Circle {...{ pixelSpacing, combDistance }} />
      </g>
      <g>
        <animateTransform
          {...{
            attributeName: "transform",
            type: "translate",
            from: "0 400",
            to: "0 100",
            dur: "40s",
            repeatCount: "indefinite",
          }}
        />
        <Circle {...{ pixelSpacing, combDistance, cx: 550, cy: 550 }} />
      </g>
    </g>
  );
};

export { TwoCircles };
