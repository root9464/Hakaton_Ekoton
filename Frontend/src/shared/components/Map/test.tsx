import { useEffect, useRef } from 'react';
import Russia from './Russia';

export const Map = () => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const moskvaPath = svgRef.current.querySelector(`path[id="Moskva"]`) as SVGPathElement;
      if (moskvaPath) {
        console.log(moskvaPath);
        moskvaPath.style.fill = 'black';
      }
    }
  }, [svgRef]);

  return <Russia ref={svgRef} size={1600} mapColor='#FFFFFF' strokeColor='blue' onSelect={console.log} />;
};
