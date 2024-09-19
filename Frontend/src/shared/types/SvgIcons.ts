import { SVGProps } from 'react';

export type SvgIconsProps = {
  width?: number;
  height?: number;
  fill: string;
  className?: string;
  onClick?: () => void;
} & Partial<SVGProps<SVGSVGElement>>;
