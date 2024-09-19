import { CrossIco } from '@assets/icons/cross';
import { Input } from '@ui/project/input';
type ModalProps = {
  onClick?: () => void;
};
export const Modal = ({ onClick }: ModalProps) => {
  return (
    <div className='w-full h-screen absolute top-0 left-0'>
      <div className='w-full h-full bg-black opacity-50' />
      <form className='w-[550px] h-[455px] bg-uiBg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-uiDefault px-20 pt-12'>
        <CrossIco fill='black' width={24} height={24} className='absolute top-5 right-5 cursor-pointer' onClick={onClick} />
        <h2 className='text-4xl font-bold text-center text-colorText'>Регистрация</h2>
        <div>
          <Input />
        </div>
      </form>
    </div>
  );
};
