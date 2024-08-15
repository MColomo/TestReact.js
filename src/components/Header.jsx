import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link to={'/'}> Floristería Dulces Pétalos </Link>
        {/* #TODO: Breadcrumbs */}
        </header>
    );
}