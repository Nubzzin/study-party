import { Link } from "react-router";
import "../css/Navbar.css";

function Navbar() {
    return (
        <div className="grid grid-cols-3 shadow-lg rounded-md">
            <Link
                to="/"
                className="p-4 px-10 m-1 block hover:bg-zinc-800 rounded-lg"
            >
                Home
            </Link>
            <Link
                to="/contents"
                className="p-4 px-10 m-1 block hover:bg-zinc-800 rounded-lg"
            >
                Conteúdos
            </Link>
            <Link
                to="/qa"
                className="p-4 px-10 m-1 block hover:bg-zinc-800 rounded-lg"
            >
                Q&A
            </Link>
        </div>
    );
}

export default Navbar;
