import { useSingUp } from '@/shared/api/useAuth';
import { useAuthStore } from '@/shared/store/Auth';
import { DataUserSignUp, Mutate } from '@/shared/types/auth';
import { Input } from '@/shared/ui/project/input';
import { CrossIco } from '@assets/icons/cross';
import { Lion } from '@assets/icons/Lion';
import { Plant } from '@assets/icons/Plant';
import { Link } from '@tanstack/react-router';
import { Button } from '@ui/project/button';
import { Modal } from '@ui/project/modal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState<DataUserSignUp>({
    firstname: '',
    lastname: '',
    login: '',
    password: '',
  });

  const { mutate, data, isSuccess } = useSingUp();
  const { setUserSrote, user } = useAuthStore();
  const onClick = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (isSuccess) {
      setUserSrote(data);
    }
  }, [isSuccess, data]);

  const hasNoEmptyFields = Object.values(user).every((value) => value !== '');

  return (
    <div className='w-[800px] h-[80px] flex justify-between items-center bg-white rounded-[35px] px-14 mx-auto mt-[100px]'>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <Plant fill='black' width={50} height={50} className='cursor-pointer' />
        <Link to='/' className='text-3xl font-bold text-colorText'>
          Logo
        </Link>
      </div>
      {!hasNoEmptyFields ? (
        <Button text='Вход' className='rounded-3xl font-bold text-2xl' onClick={onClick} />
      ) : (
        <Button text={user.firstname} className='rounded-3xl font-bold text-2xl' />
      )}
      {openModal && (
        <Modal>
          <AuthForm setModal={setOpenModal} mutate={mutate} input={input} setInput={setInput} />
        </Modal>
      )}
    </div>
  );
};

const AuthForm = ({
  setModal,
  mutate,
  input,
  setInput,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  mutate: Mutate<DataUserSignUp>;
  input: DataUserSignUp;
  setInput: Dispatch<SetStateAction<DataUserSignUp>>;
}) => {
  return (
    <form
      className='
        w-[550px] h-[455px] bg-uiBg absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 rounded-uiDefault px-20 pt-12 flex flex-col gap-11'>
      <CrossIco
        fill='black'
        width={24}
        height={24}
        className='absolute top-5 right-5 cursor-pointer'
        onClick={() => setModal((prev) => !prev)}
      />
      <h2 className='text-4xl font-bold text-center text-colorText'>Регистрация</h2>
      <div className='grid grid-cols-2 gap-y-6 gap-x-8'>
        <Input
          placeholder='Логин'
          type='text'
          className='w-full bg-uiInput text-[#8E8E93] col-span-2'
          onChange={(e) => setInput({ ...input, login: e.target.value })}
        />
        <Input
          placeholder='Пароль'
          type='text'
          className='w-full bg-uiInput text-[#8E8E93] col-span-2'
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <Input
          placeholder='Имя'
          type='text'
          className='w-full bg-uiInput text-[#8E8E93]'
          onChange={(e) => setInput({ ...input, firstname: e.target.value })}
        />
        <Input
          placeholder='Фамилия'
          type='text'
          className='w-full bg-uiInput text-[#8E8E93]'
          onChange={(e) => setInput({ ...input, lastname: e.target.value })}
        />
        <Button
          text='Войти'
          className='w-1/2 col-span-2 justify-self-end rounded-[17px]'
          onClick={() => {
            setModal((prev) => !prev);
            mutate(input);
          }}
        />
      </div>
      <Lion fill='#007AFF' width={100} height={109} className='absolute bottom-0 left-1/4 -translate-x-1/2' />
    </form>
  );
};
