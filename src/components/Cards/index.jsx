import CardNews from "./CardNews";

import ImageCard01 from "../../assets/image-retro-pcs.jpg"
import ImageCard02 from "../../assets/image-top-laptops.jpg"
import ImageCard03 from "../../assets/image-gaming-growth.jpg"

export default function NewsCard() {
    return (
        <section className="
            m-4 flex flex-col gap-5
            md:px-28 md:py-16 
            lg:px-52 lg:grid lg:grid-cols-3
            ">
            <CardNews
                ImageNews={ImageCard01}
                ImageDetail="Computer Game"
                NumberCard="01"
                TitleNews="Reviving Retro PCs"
                DescritionNews="What happens when old PCs are given modern upgrades?"
            />
            <CardNews
                ImageNews={ImageCard02}
                ImageDetail="Computer Game"
                NumberCard="02"
                TitleNews="Top 10 Laptops of 2022"
                DescritionNews="Our best picks for various needs and budgets."
            />
            <CardNews
                ImageNews={ImageCard03}
                ImageDetail="Computer Game"
                NumberCard="03"
                TitleNews="The Growth of Gaming"
                DescritionNews="How the pandemic has sparked fresh opportunities."
            />
        </section>
    )
}