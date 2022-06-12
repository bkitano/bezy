import { range } from "../utils/range";
import useWindowDimensions from "../utils/useWindowDimensions";

enum CircleFit {
  TUCK,
  SPREAD,
}

const Circle = ({
  pixelSpacing,
  combDistance,
  cx = 500,
  cy = 500,
  fit = CircleFit.SPREAD,
}: {
  pixelSpacing: number;
  combDistance: number;
  cx?: number;
  cy?: number;
  fit?: CircleFit;
}) => {
  const { width, height } = useWindowDimensions();

  const tuckNumberOfConcentricCircles = Math.ceil(
    Math.max(width / 2, height / 2) / (pixelSpacing * combDistance)
  );

  const spreadNumberOfConcentricCircles = Math.ceil(
    Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) /
      (pixelSpacing * combDistance)
  );

  const numberOfConcentricCircles =
    fit === CircleFit.TUCK
      ? tuckNumberOfConcentricCircles
      : spreadNumberOfConcentricCircles;

  return (
    <g>
      {range(numberOfConcentricCircles).map((_, i) => {
        return (
          <circle
            {...{
              cx,
              cy,
              r: i * pixelSpacing * combDistance,
              fill: "none",
              stroke: "black",
            }}
          />
        );
      })}
    </g>
  );
};

export { Circle };
