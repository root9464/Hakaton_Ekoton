import { useGetFullInfo } from '@/shared/api/useGetAnimalInfo';
import { Card } from '@/shared/components/Card/Card';

export const Container = () => {
  const { data } = useGetFullInfo();
  return (
    <div className='w-full h-max mt-[200px] flex justify-start gap-[44px] flex-wrap'>
      {data?.map((item) => <Card key={item.id} id={item.id} text={item.description} img={item.img} path={`/animal-page/${item.id}`} />)}
    </div>
  );
};
