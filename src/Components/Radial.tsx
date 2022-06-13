import useWindowDimensions from "../utils/useWindowDimensions";

const Radial = ({
  pixelSpacing = 50,
  combDistance = 0.1,
  cx = 550,
  cy = 650,
  r = 15,
  rayCount = 200,
}) => {
  const { width, height } = useWindowDimensions();

  const radians = Array.from(Array(rayCount).keys()).map((ray) => {
    return (ray * (2 * Math.PI)) / rayCount;
  });
  return (
    <g>
      {/* angle = 0 */}
      {radians.map((radian) => {
        return (
          <line
            {...{
              x1: width / 2,
              x2: width / 2 + Math.sin(radian) * pixelSpacing * r,
              y1: height / 2,
              y2: height / 2 + Math.cos(radian) * pixelSpacing * r,
              stroke: "black",
            }}
          />
        );
      })}
    </g>
  );
};

export { Radial };
