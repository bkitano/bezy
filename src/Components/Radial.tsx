const Radial = ({
  pixelSpacing = 50,
  combDistance = 0.1,
  cx = 550,
  cy = 650,
  r = 15,
  rayCount = 200,
}) => {
  const radians = Array.from(Array(rayCount).keys()).map((ray) => {
    return (ray * (2 * Math.PI)) / rayCount;
  });
  console.log(radians);
  return (
    <g>
      {/* angle = 0 */}
      {radians.map((radian) => {
        return (
          <line
            {...{
              x1: cx,
              x2: cx + Math.sin(radian) * pixelSpacing * r,
              y1: cy,
              y2: cy + Math.cos(radian) * pixelSpacing * r,
              stroke: "black",
            }}
          />
        );
      })}
    </g>
  );
};

export { Radial };
