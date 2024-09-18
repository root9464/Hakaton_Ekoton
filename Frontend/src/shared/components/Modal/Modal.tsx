export const Modal = () => {
  return (
    <div className='w-full h-screen absolute top-0 left-0'>
      <div className='w-full h-full bg-black opacity-50' />
      <form className='w-[550px] h-[455px] bg-uiBg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-uiDefault px-20 pt-12'>
        <h2 className='text-4xl font-bold text-center text-colorText'>Регистрация</h2>
      </form>
    </div>
  );
};
