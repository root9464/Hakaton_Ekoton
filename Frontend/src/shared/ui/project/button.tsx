type ButtonProps = {
  text: string;
  img: string;
  className?: string;
  onClick?: () => <T extends HTMLElement>(element: T) => void;
};
export const Button = ({ text, onClick, className, img }: ButtonProps) => (
  <button className={`bg-blue-500 hover:bg-blue-700 text-white px-[26px] py-[15px] w-max h-max ${className}`} onClick={onClick}>
    {text}
    <img src={img}/>
  </button>
);
