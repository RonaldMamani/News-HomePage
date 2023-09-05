import Button from "../Buttons/Button";
import TextGray from "../Texts/TextGray";
import TextPrincipal from "../Texts/TextPrincipal";

export default function PrincipalNotice({ImageNotice, ImageDetail, TitleNotice, DescritionNotice,}) {
    return (
        <div className="
            flex flex-col gap-4
            md:col-span-2
            ">
            <img src={ImageNotice} alt={ImageDetail} />
            <div className=" 
                flex flex-col gap-4 text-start
                md:grid md:grid-cols-2
                ">
                <TextPrincipal text={TitleNotice} />
                <div className="
                    flex flex-col gap-4 items-start
                    md:text-xl md:justify-between
                    ">
                    <TextGray text={DescritionNotice} />
                    <Button text="READ MORE" />
                </div>
            </div>
        </div>
    )
}