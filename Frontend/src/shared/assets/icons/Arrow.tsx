type ArrowProps = {
    width?: number;
    height?: number;
    fill?: string;
  }
  
  export const Arrow = ({ width, height, fill}: ArrowProps) => {
    return (
      <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 12h20" />
        <path d="M12 22l10-5-10-5z" />
      </svg>
    );
  };