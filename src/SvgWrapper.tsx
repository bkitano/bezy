import useWindowDimensions from "./utils/useWindowDimensions";

const SvgWrapper = (props: any) => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="svg">
      <svg {...{ width, height }}>
        {/* <Grid
            {...{
              start_x: 0,
              start_y: 0,
              end_x: 1000,
              end_y: 1000,
              spacing: pixelSpacing,
            }}
          /> */}
        {props.children}
      </svg>
    </div>
  );
};

export default SvgWrapper;
