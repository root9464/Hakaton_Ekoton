import { Link } from '@tanstack/react-router';

export const AnimalPage = () => {
  return (
    <>
      <h1>Животное</h1>

      <Link to='/animal-page/$animalName' params={{ animalName: 'кошка' }}>
        Перейти
      </Link>
    </>
  );
};
