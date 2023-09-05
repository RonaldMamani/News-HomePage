import Notices from "./Notices";
import PrincipalNotice from "./PrincipalNotice";

import ImageNoticePrincipal from "../../assets/image-web-3-desktop.jpg"

export default function News() {
    return (
        <section className="
            p-4 flex flex-col gap-16
            md:mx-52 md:grid md:grid-cols-3 md:gap-7
            ">
            <PrincipalNotice 
                ImageNotice={ImageNoticePrincipal}
                ImageDetail="Games Notices"
                TitleNotice="The Bright Future of Web 3.0?"
                DescritionNotice="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
                />
            <Notices 
                Notice1="Hydrogen VS Electric Cars"
                DescritionNews1="Will hydrogen-fueled cars ever catch up to EVs?"
                Notice2="The Downsides of AI Artistry"
                DescritionNews2="What are the possible adverse effects of on-demand AI image generation?"
                Notice3="Is VC Funding Drying Up?"
                DescritionNews3="Private funding by VC firms is down 50% YOY. We take a look at what that means."
                />
        </section>
    )
}