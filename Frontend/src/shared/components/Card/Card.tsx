import { Button } from "@ui/project/button";
import Vector from "@assets/Vector.svg"

export const Card = () => { 
    return(
        <div className="w-[700px] h-[333px] flex justify-between">
            <div className="w-[309px] h-full bg-green-600 rounded-tl-uiDefault rounded-bl-uiDefault flex">

            </div>
            <div className="flex flex-col bg-white rounded-tr-uiDefault rounded-br-uiDefault w-[390px]">
                <p className="p-[30px] text-left text-[20px]">Белки – одни из самых многочисленных жителей московских территорий,
                     они обитают на всех природных территориях столицы.</p>
                <Button text="Подробнее" img={Vector}  className="mt-[35px] self-end rounded-[16px] flex items-center mr-[61px]"/>
            </div>
        </div>
    )
}