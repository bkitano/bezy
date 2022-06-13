import useWindowDimensions from "../utils/useWindowDimensions";

const DiagonalPath = () => {
  const { width, height } = useWindowDimensions();

  return (
    <animateMotion
      {...{
        dur: "90s",
        path: `M 0 0 L ${width} ${height} Z`,
        repeatCount: "indefinite",
      }}
    />
  );
};

export { DiagonalPath };
