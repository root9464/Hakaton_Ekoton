import { Menubuttons } from "../Buttons/MenuButtons";

export const Menu = () => {
    return(
        <div className="flex justify-center mt-[90px] gap-[65px]">
           <Menubuttons text="Животные"/>
           <Menubuttons text="Растения"/>
           <Menubuttons text="Грибы"/>
           <Menubuttons text="Карта"/>
        </div>
    )
}