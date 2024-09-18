import { Menubuttons } from "../Buttons/MenuButtons";

export const Menu = () => {
    const item = ["Животные", "Растения", "Грибы", "Карта"];

    return(
        <div className="flex justify-center mt-[90px] gap-[65px]">
           {item.map((text, index) => (
             <Menubuttons key={index} text={text} />
           ))}
        </div>
    )
}