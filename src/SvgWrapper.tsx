const SvgWrapper = (props: any) => {
  return (
    <div className="svg">
      <svg width="1100px" height="1100px" viewBox="0 0 1100 1100">
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
