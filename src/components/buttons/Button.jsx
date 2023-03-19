import { Link } from "react-router-dom";
import "./button.css"

const Button = ({ buttonContent, id }) => {
    return (
        <Link to={`/postify/post-details/${id}`} className="main-btn">
            {buttonContent}
        </Link>
    );
}

export default Button;
