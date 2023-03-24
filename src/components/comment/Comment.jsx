import './comment.css';

const Comment = ({ userName, userEmail, userAvatar, commentBody }) => {
    return (
        <div className='comment-wrapper'>
            <div className='comment-head'>
                <img
                    className='user-avatar'
                    src={userAvatar}
                    alt='User Avatar'
                    loading='lazy'
                />
                <div className='comment-user-info'>
                    <span className='user-name'>{userName}</span>
                    <br />
                    <span className='user-email'>{userEmail}</span>
                </div>
            </div>
            <p className='comment-body'>{commentBody}</p>
        </div>
    );
};

export default Comment;
