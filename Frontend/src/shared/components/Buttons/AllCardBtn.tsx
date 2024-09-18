import book from '@assets/book.svg';
import { LinkButton } from '@ui/project/button';

export const AllCardBtn = () => {
  return (
    <div className='flex justify-center mt-[80px]'>
      <LinkButton text='Показать ещё' img={book} className='rounded-[29px] flex items-center justify-stretch gap-2' to='/all-animals/' />
    </div>
  );
};
