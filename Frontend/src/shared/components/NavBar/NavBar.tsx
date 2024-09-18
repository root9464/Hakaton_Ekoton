import { Button } from '@ui/project/button';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClick = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className='w-[1280px] h-[80px] flex justify-between items-center bg-white rounded-[35px] px-14 mx-auto mt-[100px]'>
      <nav>
        <ul className='flex gap-10'>
          <li>
            <Button text='Животные' className='text-2xl' />
          </li>
          <li>
            <Button text='Растения' className='text-2xl' />
          </li>
          <li>
            <Button text='Грибы' className='text-2xl' />
          </li>
        </ul>
      </nav>
      <Button text='Вход' className='rounded-2xl font-bold text-2xl' onClick={onClick} />
      {openModal && <Modal onClick={onClick} />}
    </div>
  );
};
