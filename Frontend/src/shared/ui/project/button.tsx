type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ text, className, onClick }: ButtonProps) => (
  <button className={`bg-uiPrimary hover:bg-blue-700 text-white px-[26px] py-[15px] w-max h-max ${className}`} onClick={onClick}>
    {text}
  </button>
);
