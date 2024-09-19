import { constants, drawPath, stateCode, viewBox } from '@lib/constants/mapConsts';
import { forwardRef } from 'react';

const Russia = forwardRef<HTMLDivElement, RussiaProps>(({ size, mapColor, strokeColor, strokeWidth }, ref) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  };

  return (
    <>
      <div className='map' style={mapStyle} ref={ref}>
        <svg version='1.1' id='svg2' x='0px' y='0px' viewBox={viewBox}>
          {stateCode?.map((stateCode: string, index: number) => <path key={index} id={stateCode} d={drawPath[stateCode]} />)}
        </svg>
      </div>
    </>
  );
});

export interface RussiaProps {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  onSelect?: (state: string, selectedStates?: string[]) => void;
}

export default Russia;
