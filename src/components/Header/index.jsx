import logo from "../../assets/logo.svg"
import NavBar from "./Navbar"

export default function Header() {
    return (
        <header className="
            flex justify-between items-center m-4
            md:px-28
            lg:px-52
            ">
            <a href="#">
                <img src={logo} alt="Logotipo" />
            </a>
            <NavBar />
        </header>
    )
}