import { Button } from "@ui/project/button";

export const Card = () => { 
    return(
        <div className="w-[700px] h-[333px] flex justify-between">
            <div className="w-[309px] h-full bg-green-600 rounded-tl-uiDefault rounded-bl-uiDefault">

            </div>
            <div className="flex flex-col">
                <p>Белки – одни из самых многочисленных жителей московских территорий,
                     они обитают на всех природных территориях столицы.</p>
                <Button text="Подробнее" img="/arrow.svg"/>
            </div>
        </div>
    )
}