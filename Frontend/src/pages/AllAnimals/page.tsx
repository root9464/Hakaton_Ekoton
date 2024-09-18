import { Card } from "@components/Card/Card";
import { Input } from "@ui/project/input";
import { useState } from "react";

export const AllAnimals = () => {
  type AnimalObject = {
    id: number;
    class: string;
    name: string;
    title: string;
    description: string;
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalObject[]>([]);

  const object: AnimalObject[] = [
    {
      "id": 3,
      "class": "",
      "name": "Lion",
      "title": "King of the Jungle",
      "description": "Lions are carnivorous mammals.",
    }
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredAnimals = object.filter((animal) => animal.name.toLowerCase().includes(searchTerm));
    setFilteredAnimals(filteredAnimals);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchTerm.trim() !== '') {
        const filteredAnimals = object.filter((animal) => animal.name.toLowerCase().includes(searchTerm));
        setFilteredAnimals(filteredAnimals);
      } else {
        setFilteredAnimals([]);
      }
    }
  };

  let animalCards;
  if (filteredAnimals.length > 0) {
    animalCards = filteredAnimals.map((animal) => (
      <div>
        <h2>{animal.name}</h2>
        <p>{animal.title}</p>
        <p>{animal.description}</p>
        <Card />
      </div>
    ));
  } 

  return (
    <div className="mt-[47px] flex items-center flex-col">
      <Input 
        className="bg-white text-slate-700 w-[699px] h-[70px] rounded-[50px] mx-auto"
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <div className="mt-[136px] flex justify-center gap-[44px] flex-wrap overflow-y-auto max-h-[700px] rounded-uiDefault py-9">
      {animalCards}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
   </div>
  );
};
