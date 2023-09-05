import logo from "../../assets/logo.svg"
import NavBar from "./Navbar"

export default function Header() {
    return (
        <header className="
            flex justify-between items-center p-4
            md:mx-52
            ">
            <a href="#">
                <img src={logo} alt="Logotipo" />
            </a>
            <NavBar />
        </header>
    )
}