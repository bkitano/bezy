import { Moire } from "../Components/Moire";

const TwoWaves = ({ pixelSpacing }: { pixelSpacing: number }) => (
  <g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 550 550"
        // from="0 0 0"
        to="0 550 550"
        // to="360 0 0"
        dur="1500s"
        repeatCount="indefinite"
      />
      <Moire
        {...{
          pixelSpacing,
          amplitude: Math.random() * pixelSpacing,
          wavelength: (3 + Math.random()) * pixelSpacing,
        }}
      />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 550 550"
        // from="0 0 0"
        to="360 550 550"
        // to="360 0 0"
        dur="1500s"
        repeatCount="indefinite"
      />
      <g transform="rotate(20)">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 20"
          to="0 200"
          dur="180s"
          repeatCount="indefinite"
        />
        <Moire
          {...{
            pixelSpacing,
            amplitude: Math.random() * pixelSpacing,
            wavelength: (3 + Math.random()) * pixelSpacing,
            combDistance: 0.05 + 0.2 * Math.random(),
          }}
        />
      </g>
    </g>
  </g>
);

export { TwoWaves };
