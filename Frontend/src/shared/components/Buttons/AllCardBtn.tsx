import { LinkButton } from "@ui/project/button";
import book from "@assets/book.svg"

export const AllCardBtn = () => {

    return(
        <div className="flex justify-center mt-[80px]">
            <LinkButton text="Показать ещё" img={book} className="rounded-[29px] flex items-center" to="/Animals/"/>
        </div>
    )
}