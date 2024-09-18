import { Header } from '@/components/Header/Header';
import { Menu } from '@/components/Menu/Menu';

export const App = () => {
  return (
    <>
      <div className='w-96 h-10 bg-red-500'>
        <Button text='Button' className='rounded-uiDefault' />
      </div>
      <Header />
      <Menu />
    </>
  );
};
