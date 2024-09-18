import { Link } from '@tanstack/react-router';

type ButtonProps = {
  text: string;
  className?: string;
  img?: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, className, img }: ButtonProps) => (
  <button className={`bg-blue-500 hover:bg-blue-700 text-white px-[26px] py-[10px] w-max h-fit ${className}`} onClick={onClick}>
    {text}
    <img src={img} alt='' />
  </button>
);

export const LinkButton = ({ text, className, to }: ButtonProps & { to: string }) => (
  <Link to={to} className={`bg-uiPrimary hover:bg-blue-700 text-white px-[26px] py-[15px] w-fit h-max ${className}`}>
    {text}
  </Link>
);
