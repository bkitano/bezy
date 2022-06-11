const Curve = (props: any) => {
  const { offset_x, offset_y, period, amplitude } = props;
  const x = offset_x;
  const y = offset_y;

  const BOTTOM_CONTROL_POINT = 0.3642124232;
  const TOP_CONTROL_POINT = 1 - BOTTOM_CONTROL_POINT;

  const points = {
    a: { x: 0 + offset_x, y: 0 + offset_y },
    b: { x: BOTTOM_CONTROL_POINT * period + offset_x, y: 0 + offset_y },
    c: {
      x: TOP_CONTROL_POINT * period + offset_x,
      y: 1 * amplitude + offset_y,
    },
    d: { x: 1 * period + offset_x, y: 1 * amplitude + offset_y },
    e: {
      x: (1 + BOTTOM_CONTROL_POINT) * period + offset_x,
      y: 1 * amplitude + offset_y,
    },
    f: { x: (1 + TOP_CONTROL_POINT) * period + offset_x, y: 0 + offset_y },
    g: { x: 2 * amplitude + offset_x, y: 0 + offset_y },
  };

  return (
    <g>
      {/* the first half */}
      {/* <circle cx={points.a.x} cy={points.a.y} r="2" fill="red" />
        <circle cx={points.b.x} cy={points.b.y} r="2" fill="red" />
        <circle cx={points.c.x} cy={points.c.y} r="2" fill="red" />
        <circle cx={points.d.x} cy={points.d.y} r="2" fill="red" />
        <circle cx={points.e.x} cy={points.e.y} r="2" fill="red" />
        <circle cx={points.f.x} cy={points.f.y} r="2" fill="red" />
        <circle cx={points.g.x} cy={points.g.y} r="2" fill="red" />
  
        <Line a={points.a} b={points.b} />
        <Line a={points.b} b={points.c} />
        <Line a={points.c} b={points.d} />
        <Line a={points.d} b={points.e} />
        <Line a={points.e} b={points.f} />
        <Line a={points.f} b={points.g} /> */}

      <path
        d={`
          M ${points.a.x} ${points.a.y}, 
          C ${points.a.x} ${points.a.y}, ${BOTTOM_CONTROL_POINT * period + x} ${
          0 + y
        }, 
          ${0.5 * period + x} ${0.5 * amplitude + y}
          M ${0.5 * period + x} ${0.5 * amplitude + y}, 
          S ${TOP_CONTROL_POINT * period + x} ${1.0 * amplitude + y}, ${
          1.0 * period + x
        } ${1.0 * amplitude + y}
          `}
        stroke="black"
        fill="transparent"
      />

      <path
        d={`
          M ${period + x} ${amplitude + y}, 
          C ${period + x} ${amplitude + y}, ${
          (1 + BOTTOM_CONTROL_POINT) * period + x
        } ${amplitude + y}, ${1.5 * period + x} ${0.5 * amplitude + y}
          M ${1.5 * period + x} ${0.5 * amplitude + y}, 
          S ${(1 + TOP_CONTROL_POINT) * period + x} ${0.0 * amplitude + y}, ${
          2.0 * period + x
        } ${0.0 * amplitude + y}
          `}
        stroke="black"
        fill="transparent"
      />
    </g>
  );
};

export { Curve };
