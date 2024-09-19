import { ReactNode } from 'react';
type ModalProps = {
  onClick?: () => void;
  children?: ReactNode;
};
export const Modal = ({ onClick, children }: ModalProps) => {
  return (
    <div className='w-full h-screen absolute top-0 left-0'>
      <div className='w-full h-full bg-black opacity-50' onClick={onClick} />
      {children}
    </div>
  );
};
