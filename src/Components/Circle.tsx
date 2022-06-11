const Circle = ({
  pixelSpacing,
  combDistance,
  cx = 500,
  cy = 500,
}: {
  pixelSpacing: number;
  combDistance: number;
  cx?: number;
  cy?: number;
}) => {
  return (
    <g>
      {Array.from(Array(Math.floor(Math.PI * pixelSpacing))).map((_, i) => {
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
