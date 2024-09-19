import { Button } from '@ui/project/button';
import { Input } from '@ui/project/input';

export const AdminPage = () => {
  return (
    <div className='flex gap-[190px] mt-[57px]'>
      <div className='flex flex-col gap-[32px]'>
        <div className='bg-white rounded-uiDefault text-center w-[976px] h-[331px]'>
          <p className='text-start ml-[135px] mt-[57px] text-[36px]'>Инфа о Админке</p>
        </div>
        <div className='bg-white rounded-uiDefault text-center w-[976px] h-[820px]'>
          <h1 className='mt-[70px] text-start ml-[135px] text-[36px]'>
            <b>Сообщения</b>
          </h1>
          <div className='flex flex-wrap gap-[40px] justify-center mt-[48px]'>
            <div className='bg-[#EFEFF4] w-[418px] h-[292px] rounded-uiDefault'></div>
            <div className='bg-[#EFEFF4] w-[418px] h-[292px] rounded-uiDefault'></div>
            <div className='bg-[#EFEFF4] w-[418px] h-[292px] rounded-uiDefault'></div>
            <div className='bg-[#EFEFF4] w-[418px] h-[292px] rounded-uiDefault'></div>
          </div>
        </div>
      </div>
      <div className='bg-white w-[505px] h-[920px] rounded-uiDefault flex flex-col items-center'>
        <h1 className='mt-[33px] text-[36px]'>
          <b>Админка</b>
        </h1>
        <div className='mt-[46px] flex gap-[26px] w-full justify-center'>
          <Input type='text' placeholder='Животное' className='w-[121px] h-[48px] bg-[#EFEFF4] rounded-[17px] placeholder:text-[13px]' />
          <Input type='text' placeholder='Категория' className='w-[121px] h-[48px] bg-[#EFEFF4] rounded-[17px] placeholder:text-[13px]' />
          <Input type='text' placeholder='Регион' className='w-[121px] h-[48px] bg-[#EFEFF4] rounded-[17px] placeholder:text-[13px]' />
        </div>
        <div className='mt-[24px] flex flex-col gap-[24px] w-full items-center'>
          <Input type='text' placeholder='Описание' className='bg-[#EFEFF4] rounded-[17px] w-[415px] h-[124px] placeholder:text-[13px]' />
          <Input type='text' placeholder='Образ жизни' className='bg-[#EFEFF4] rounded-[17px] w-[415px] h-[124px] placeholder:text-[13px]' />
          <Input type='text' placeholder='Факты' className='bg-[#EFEFF4] rounded-[17px] w-[415px] h-[124px] placeholder:text-[13px]' />
          <Input type='text' placeholder='Внешний вид' className='bg-[#EFEFF4] rounded-[17px] w-[415px] h-[124px] placeholder:text-[13px]' />
          <Button text='Добавить информацию' className='w-[333px] h-[59px] mt-[35px] bg-[#007AFF] rounded-[24px] self-right' />
        </div>
      </div>
    </div>
  );
};
