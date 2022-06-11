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
      <Circle {...{ pixelSpacing, combDistance }} />
      <Circle {...{ pixelSpacing, combDistance, cx: 550, cy: 550 }} />
    </g>
  );
};

export { TwoCircles };
