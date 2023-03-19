import NotFoundImg from "../../assets/images/not-found.png";
import "./notFound.css";

const NotFound = () => {
    return (
        <div className="container not-found-wrapper">
            <img className="not-found-img" src={NotFoundImg} alt="Page Not Found" />
        </div>
    );
}

export default NotFound;
