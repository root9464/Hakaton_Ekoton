type ButtonProps = {
  text: string;
  otherStyles?: string;
  onClick?: () => void;
};

export const Menubuttons = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className=' w-[160px] h-[160px] rounded-uiDefault bg-white text-colorText flex text-center items-center justify-center text-2xl'
      onClick={onClick}>
      {text}
    </button>
  );
};
