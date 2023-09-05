export default function Button({text}) {
    return (
        <button className="
            bg-red-500 px-5 py-2 text-[#fffdfa]
            hover:bg-[#00001a] transition-colors
        ">{text}</button>
    )
}