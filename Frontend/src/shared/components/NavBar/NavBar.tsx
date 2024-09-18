import { Input } from '@/shared/ui/project/input';
import { CrossIco } from '@assets/icons/cross';
import { Lion } from '@assets/icons/Lion';
import { Plant } from '@assets/icons/Plant';
import { Link } from '@tanstack/react-router';
import { Button } from '@ui/project/button';
import { Modal } from '@ui/project/modal';
import { useState } from 'react';

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClick = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className='w-[800px] h-[80px] flex justify-between items-center bg-white rounded-[35px] px-14 mx-auto mt-[100px]'>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <Plant fill='black' width={50} height={50} className='cursor-pointer' />
        <Link to='/' className='text-3xl font-bold text-colorText'>
          Logo
        </Link>
      </div>
      <Button text='Вход' className='rounded-3xl font-bold text-2xl' onClick={onClick} />
      {openModal && (
        <Modal onClick={onClick}>
          <AuthForm onClick={onClick} />
        </Modal>
      )}
    </div>
  );
};

const AuthForm = ({ onClick }: { onClick: () => void }) => {
  return (
    <form
      className='
        w-[550px] h-[455px] bg-uiBg absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 rounded-uiDefault px-20 pt-12 flex flex-col gap-11'>
      <CrossIco fill='black' width={24} height={24} className='absolute top-5 right-5 cursor-pointer' onClick={onClick} />
      <h2 className='text-4xl font-bold text-center text-colorText'>Регистрация</h2>
      <div className='grid grid-cols-2 gap-y-6 gap-x-8'>
        <Input placeholder='Логин' type='text' className='w-full bg-uiInput text-[#8E8E93] col-span-2' />
        <Input placeholder='Пароль' type='text' className='w-full bg-uiInput text-[#8E8E93] col-span-2' />
        <Input placeholder='Имя' type='text' className='w-full bg-uiInput text-[#8E8E93]' />
        <Input placeholder='Фамилия' type='text' className='w-full bg-uiInput text-[#8E8E93]' />
        <Input placeholder='Телефон' type='text' className='w-1/2 bg-uiInput text-[#8E8E93] col-span-2 justify-self-end' />
      </div>
      <Lion fill='#007AFF' width={100} height={109} className='absolute bottom-0 left-1/4 -translate-x-1/2' />
    </form>
  );
};
