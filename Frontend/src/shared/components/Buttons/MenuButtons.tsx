type ButtonProps = {
  text: string;
  otherStyles?: string;
  onClick?: () => <T extends HTMLElement>(element: T) => void;
};

export const Menubuttons = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className=' w-[160px] h-[160px] rounded-uiDefault bg-white text-colorText flex text-center items-center justify-center text-2xl'
      onClick={onClick}>
      {text}
    </div>
  );
};
