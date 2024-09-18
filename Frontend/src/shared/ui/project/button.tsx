type ButtonProps = {
  text: string;
  otherStyles?: string;
  onClick?: () => <T extends HTMLElement>(element: T) => void;
};
export const Button = ({ text, onClick }: ButtonProps) => (
  <button className='bg-blue-500 hover:bg-blue-700 text-white px-[26px] py-[15px] w-max h-max' onClick={onClick}>
    {text}
  </button>
);
