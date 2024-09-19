import { useGetShortInfo } from '@/shared/api/useGetAnimalInfo';
import { MenuData } from '@/shared/lib/constants/all.consts';
import { GetShortInfo } from '@/shared/types/getInfo';
import { useEffect, useState } from 'react';
import { Menubuttons } from '../Buttons/MenuButtons';
import { Card } from '../Card/Card';

export const Container = () => {
  const { data } = useGetShortInfo();
  const [sorted, setSorted] = useState<GetShortInfo[] | null>();

  useEffect(() => {
    if (!data) return;
    setSorted(data);
  }, [data]);

  const classCategory: Record<string, string> = {
    animals: 'Животные',
    plants: 'Растения',
    gibber: 'Грибы',
  };

  const sorting = (value: string) => {
    if (!data || !value) return;

    const filteredData =
      value === 'Популярные'
        ? data
        : data.filter((item) => {
            const classKey = Object.keys(classCategory).find((key) => classCategory[key] === value);
            return classKey === item.class;
          });

    setSorted(filteredData);
  };

  return (
    <>
      <div className='flex justify-center mt-[90px] gap-[65px]'>
        {MenuData.map((item) => (
          <Menubuttons key={item} text={item} onClick={() => sorting(item)} />
        ))}
      </div>

      <div className='w-full max-w-[1700px] overflow-y-auto mt-[200px] flex justify-center gap-[44px] flex-wrap'>
        {sorted &&
          sorted.map((item) => <Card key={item.id} id={item.id} text={item.description} img={item.img} path={`/animal-page/${item.id}`} />)}
      </div>
    </>
  );
};
