import { SvgIconsProps } from '@/shared/types/SvgIcons';

export const Plant = ({ width = 100, height = 109, fill, className }: SvgIconsProps) => (
  <svg width={width} height={height} viewBox='0 0 634 668' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path
      d='M634 34.0001V100.667C634 229.533 529.533 334 400.667 334H367.333V367.333H534V600.667C534 637.5 504.167 667.333 467.333 667.333H200.667C163.833 667.333 134 637.5 134 600.667V367.333H300.667V267.333C300.667 138.467 405.133 34.0001 534 34.0001H634ZM117.333 0.666748C201.633 0.666748 276.167 42.3668 321.467 106.3C287.467 151 267.333 206.833 267.333 267.333V300.667H250.667C112.6 300.667 0.666626 188.733 0.666626 50.6667V0.666748H117.333Z'
      fill={fill}
    />
  </svg>
);
