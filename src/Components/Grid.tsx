type CoordinateProps = {
  fontSize: number;
};

const getGridFontSize = (spacing: number, end_y: number): number => {
  return (spacing * 0.8) / Math.floor(Math.log10(end_y));
};

const Grid = (props: any) => {
  const {
    start_x = 0,
    start_y = 0,
    end_x,
    end_y,
    spacing = 10,
    coords = undefined,
  } = props;

  return (
    <g>
      {Array.from(Array(Math.floor((end_x - start_x) / spacing))).map(
        (_, i) => {
          const x = start_x + i * spacing;
          return (
            <g>
              <text
                width={spacing}
                textAnchor="middle"
                x={x + spacing / 2}
                y={start_y + 10}
                {...{
                  fontSize: getGridFontSize(spacing, end_y),
                }}
                fill="blue"
              >
                {x}
              </text>
              <line
                x1={x + spacing / 2}
                y1={start_y + 10}
                x2={x + spacing / 2}
                y2={end_y + 10}
                stroke="black"
              />
            </g>
          );
        }
      )}
    </g>
  );
};

export { Grid };
