import Vector from '@assets/Vector.svg';
import { LinkButton } from '@ui/project/button';

type CardProps = {
  id: number;
  text: string;
  img: string;
  path: string;
};

export const Card = ({ id, text, img, path }: CardProps) => {
  return (
    <div className='w-[700px] h-[333px] flex justify-between' key={id}>
      {img ? (
        <img className='w-[309px] h-full bg-green-600 rounded-tl-uiDefault rounded-bl-uiDefault flex' src={img} alt='animal card image' />
      ) : (
        <div className='w-[309px] h-full bg-green-600 rounded-tl-uiDefault rounded-bl-uiDefault flex' />
      )}
      <div className='flex flex-col justify-between py-8 bg-white rounded-tr-uiDefault rounded-br-uiDefault w-[390px] h-full'>
        <p className='p-[30px] text-left text-[20px]'>{text}</p>
        <LinkButton to={path} text='Подробнее' img={Vector} className='mt-[35px] self-end rounded-[16px] mr-[61px]' />
      </div>
    </div>
  );
};
