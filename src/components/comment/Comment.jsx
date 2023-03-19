import userDefaultAvatar from '../../assets/images/user-default-avatar.png';
import "./comment.css"

const Comment = ({ userName, userEmail,  commentBody }) => {
    return (
        <div className='comment-wrapper'>
            <div className="comment-head">
                <img className='user-avatar' src={userDefaultAvatar} alt="User Avatar" />
                <div className="comment-user-info">
                    <span className='user-name'>{userName}</span>
                    <br />
                    <span className='user-email'>{ userEmail }</span>
                </div>
            </div>
            <p className='comment-body'>{ commentBody }</p>
        </div>
    );
}

export default Comment;
