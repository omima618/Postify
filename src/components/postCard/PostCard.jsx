import "./postCard.css";
import userDefaultAvatar from "../../assets/images/user-default-avatar.png";

import Button from "../buttons/Button";

const PostCard = ({postId, postTitle, postDesc}) => {
    return (
        <div className="post-card">
            <div className="user-avatar">
                <img src={userDefaultAvatar} alt="User Avatar" />
            </div>
            <span className="user-name">John Doe</span>
            <h3 className="post-title"> { postTitle } </h3>
            <p className="post-desc"> { postDesc } </p>
            <Button buttonContent='Read More' id={postId} />
        </div>
    );
}

export default PostCard;
