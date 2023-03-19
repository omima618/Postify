import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = (new Date()).getFullYear();
    return (
        <footer>
        <div className= "container">
            &copy; All rights reserved
            <Link to='/postify' className="special-text"> Postify </Link>
            {currentYear}
        </div>
        </footer>
    );
}

export default Footer;
