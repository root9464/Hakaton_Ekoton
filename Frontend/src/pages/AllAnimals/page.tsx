import { GetShortInfo } from '@/shared/types/getInfo';
import { useGetShortInfo } from '@shared/api/useGetAnimalInfo';
import { Card } from '@shared/components/Card/Card';
import { Input } from '@ui/project/input';
import { ChangeEvent, useEffect, useState } from 'react';

export const AllAnimals = () => {
  const { data } = useGetShortInfo();

  const [sorted, setSorted] = useState<GetShortInfo[] | null>();
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!data) return;
    setSorted(data);
  }, [data]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      if (e.target.value === '' || e.target.value === ' ') {
        setSorted(data);
      }
      sorting(e.target.value);
    }, 700);

    setDebounceTimeout(timeout);
  };

  const sorting = (value: string) => {
    if (!data || !value) return;
    const filteredData = data && data.filter((item) => item.description.toLowerCase().includes(value.toLowerCase()));
    setSorted(filteredData);
  };

  return (
    <div className='w-full h-[800px] my-[50px] flex gap-6 flex-col justify-center items-center'>
      <Input placeholder='Поиск...' type='text' onChange={handleInputChange} className='w-1/4 self-center col-span-1' />
      <div className='grid grid-cols-2 gap-3 w-fit h-full overflow-y-scroll bg-[#EFEFF4] rounded-s-uiDefault py-8 px-8'>
        {sorted &&
          sorted.map((item) => <Card key={item.id} id={item.id} text={item.description} img={item.img} path={`/animal-page/${item.id}`} />)}
      </div>
    </div>
  );
};
