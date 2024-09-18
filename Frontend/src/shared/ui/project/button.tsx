import { Link } from '@tanstack/react-router';

type ButtonProps = {
  text: string;
  className?: string;
  img?: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, className, img }: ButtonProps) => (
  <button
    className={`bg-blue-500 hover:bg-blue-700 text-white px-6 py-[10px] w-max h-fit flex gap-2 items-center ${className}`}
    onClick={onClick}>
    {text}
    {img && <img src={img} alt='' width={20} height={20} />}
  </button>
);

export const LinkButton = ({ text, className, to, img }: ButtonProps & { to: string }) => (
  <Link to={to} className={`bg-uiPrimary hover:bg-blue-700 text-white px-6 py-[10px] w-fit h-max flex gap-2 items-center ${className}`}>
    {text}
    {img && <img src={img} alt='' width={20} height={20} />}
  </Link>
);
