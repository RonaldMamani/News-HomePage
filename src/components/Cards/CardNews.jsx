import Number from "../Texts/Number";
import TextGray from "../Texts/TextGray";
import TextSecundary from "../Texts/TextSecundary";

export default function CardNews({ImageNews, ImageDetail, NumberCard, TitleNews, DescritionNews}) {
    return (
        <div className="
            grid grid-cols-5 gap-4 hover:cursor-pointer 
            hover:border-[#e9aa52] hover:border-solid hover:border-4 hover:p-2 hover:text-[#e9aa52]">
            <div className="col-span-2">
                <img src={ImageNews} alt={ImageDetail} />
            </div>
            <div className="flex flex-col justify-between text-start col-span-3">
                <Number number={NumberCard} />
                <TextSecundary text={TitleNews} />
                <TextGray text={DescritionNews} />
            </div>
        </div>
    )
}