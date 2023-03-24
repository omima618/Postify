import './postDetails.css';
import Comment from '../../components/comment/Comment';
import Spinner from '../../components/spinner/Spinner';

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { postsRequests, postActions } from '../../app/features/postSlice';
import { commentsRequest, commentsActions } from '../../app/features/commentSlice';

const PostDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const { currentPost, isLoading: currentPostIsLoading } = useSelector((state) => state.posts);
    const { comments, isLoading: commentsAreLoading } = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(postActions.resetCurrentPost());
        dispatch(commentsActions.resetComments());
        dispatch(postsRequests.getPostDetails(params.id));
        dispatch(commentsRequest.getPostComments({ id: params.id }));
    }, [dispatch, params.id]);

    return (
        <>
            {currentPostIsLoading ? (
                <Spinner />
            ) : (
                <section className='post-details'>
                    <div className='post-details-wrapper'>
                        <div className='user-info'>
                            {currentPost.userData && (
                                <>
                                    <img
                                        className='user-avatar'
                                        src={currentPost.userData.userAvatar}
                                        alt='User Avatar'
                                        loading='lazy'
                                    />
                                    <span className='user-name'>{currentPost.userData.userName}</span>
                                </>
                            )}
                        </div>
                        <div className='post-info'>
                            <h3 className='post-title'>{currentPost.title}</h3>
                            <p className='post-desc'>{currentPost.body}</p>
                        </div>
                        {commentsAreLoading ? (
                            <Spinner />
                        ) : (
                            <div className='post-comments-wrapper'>
                                <h4>Comments</h4>
                                <div className='comments-list'>
                                    {comments.map((comment) => {
                                        return (
                                            <Comment
                                                key={comment.id}
                                                userName={comment.name}
                                                userEmail={comment.email}
                                                userAvatar={comment.userAvatar}
                                                commentBody={comment.body}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default PostDetails;
