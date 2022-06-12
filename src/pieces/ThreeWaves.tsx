import { Moire } from "../Components/Moire";

const ThreeWaves = ({ pixelSpacing }: { pixelSpacing: number }) => (
  <g>
    <g
      {...{
        transform: `rotate(0 500 500)`,
      }}
    >
      {/* <animateMotion
        {...{
          dur: "30s",
          path: "M 300 0 L 300 1000 Z",
        }}
      /> */}
      <Moire
        {...{
          pixelSpacing,
          periods: 5,
          teeth: 200,
          amplitude: Math.random() * pixelSpacing,
          wavelength: (3 + Math.random()) * pixelSpacing,
          //   combDistance: 0.05 + 0.1 * Math.random(),
        }}
      />
    </g>
    <g
      {...{
        transform: `rotate(120 500 500)`,
      }}
    >
      {/* <animateMotion
        {...{
          dur: "30s",
          path: "M 0 0 L 1000 1000 Z",
        }}
      /> */}
      <Moire
        {...{
          pixelSpacing,
          periods: 5,
          teeth: 200,
          amplitude: Math.random() * pixelSpacing,
          wavelength: (3 + Math.random()) * pixelSpacing,
          //   combDistance: 0.05 + 0.1 * Math.random(),
        }}
      />
    </g>
    <g
      {...{
        transform: `rotate(240 500 500)`,
      }}
    >
      {/* <animateMotion
        {...{
          dur: "30s",
          path: "M 500 0 L 0 500 Z",
        }}
      /> */}
      <Moire
        {...{
          pixelSpacing,
          periods: 5,
          teeth: 200,
          amplitude: Math.random() * pixelSpacing,
          wavelength: (3 + Math.random()) * pixelSpacing,
          //   combDistance: 0.05 + 0.1 * Math.random(),
        }}
      />
    </g>
  </g>
);

export { ThreeWaves };
