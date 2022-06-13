import { Circle } from "../Components/Circle";
import { Radial } from "../Components/Radial";
import { DiagonalPath } from "../paths/Diagonal";

const RadialCircle = () => {
  return (
    <g>
      <g>
        <Radial />
      </g>
      <g>
        <DiagonalPath />
        <Circle
          {...{
            pixelSpacing: 50,
            combDistance: 0.1,
          }}
        />
      </g>
    </g>
  );
};

export { RadialCircle };
