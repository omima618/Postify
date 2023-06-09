import "./postCard.css";

import Button from "../buttons/Button";

const PostCard = ({ postId, postTitle, postDesc, userData }) => {
    return (
        <div className="post-card">
            <div className="user-avatar">
                <img
                    src={userData.userAvatar}
                    alt='User Avatar'
                />
            </div>
            <span className='user-name'>{ userData.userName }</span>
            <h3 className="post-title"> { postTitle } </h3>
            <p className="post-desc"> { postDesc } </p>
            <Button buttonContent='Read More' id={postId} />
        </div>
    );
};
export default PostCard;
