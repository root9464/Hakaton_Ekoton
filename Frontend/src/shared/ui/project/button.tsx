type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => <T extends HTMLElement>(element: T) => void;
};
export const Button = ({ text, onClick, className }: ButtonProps) => (
  <button className={`bg-blue-500 hover:bg-blue-700 text-white px-[26px] py-[15px] w-max h-max ${className}`} onClick={onClick}>
    {text}
  </button>
);
