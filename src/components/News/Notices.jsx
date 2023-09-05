import NamesNotices from "../Texts/NamesNotices";
import NewsPrincipal from "../Texts/NewsPrincipal";
import TextGray from "../Texts/TextGray";

export default function Notices({Notice1,DescritionNews1,Notice2,DescritionNews2,Notice3,DescritionNews3}) {
    return (
        <div className="
            bg-[#000030] p-4 flex flex-col gap-3
            md:justify-around
            ">
            <div>
                <NewsPrincipal text="New" />
            </div>
            <div className="
                flex flex-col gap-5
                md:text-xl
                ">
                <div className="flex flex-col gap-2">
                    <NamesNotices text={Notice1} />
                    <TextGray text={DescritionNews1} />
                </div>
                <div className="flex flex-col gap-2">
                    <NamesNotices text={Notice2} />
                    <TextGray text={DescritionNews2} />
                </div>
                <div className="flex flex-col gap-2">
                    <NamesNotices text={Notice3} />
                    <TextGray text={DescritionNews2} />
                </div>
            </div>
        </div>
    )
}