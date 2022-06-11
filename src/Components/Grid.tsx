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
      <circle cx={spacing / 2} cy={spacing / 2} r={4} />
      <text x={spacing / 2} y={spacing / 2} textAnchor="begin">
        ({spacing / 2},{spacing / 2})
      </text>
      {Array.from(Array(Math.floor((end_x - start_x) / spacing))).map(
        (_, i) => {
          const x = start_x + i * spacing;
          return (
            <g>
              <text
                width={spacing}
                textAnchor="middle"
                x={x + spacing / 2}
                y={start_y + getGridFontSize(spacing, end_y)}
                {...{
                  fontSize: getGridFontSize(spacing, end_y),
                }}
                fill="blue"
              >
                {x / spacing}
              </text>
              <line
                x1={x + spacing / 2}
                y1={start_y + getGridFontSize(spacing, end_y)}
                x2={x + spacing / 2}
                y2={end_y + getGridFontSize(spacing, end_y)}
                stroke="black"
              />
            </g>
          );
        }
      )}
      {Array.from(Array(Math.floor((end_y - start_y) / spacing))).map(
        (_, i) => {
          const y = start_y + i * spacing;
          return (
            <g>
              <text
                width={spacing}
                textAnchor="middle"
                x={start_x + getGridFontSize(spacing, end_y)}
                y={y + spacing / 2 + getGridFontSize(spacing, end_y) / 2}
                {...{
                  fontSize: getGridFontSize(spacing, end_y),
                }}
                fill="blue"
              >
                {y / spacing}
              </text>
              <line
                x1={start_x + getGridFontSize(spacing, end_y)}
                y1={y + spacing / 2}
                x2={end_x + getGridFontSize(spacing, end_y)}
                y2={y + spacing / 2}
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
