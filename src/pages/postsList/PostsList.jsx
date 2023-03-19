import './postsList.css';
import Spinner from '../../components/spinner/Spinner';

import PostCard from '../../components/postCard/PostCard';
import { useSelector } from 'react-redux';

const PostsList = () => {
    const { posts, isLoading } = useSelector((state) => state.posts);

    return isLoading ? (
        <Spinner />
    ) : (
        <section className='posts-list'>
            <div className='section-title-wrapper'>
                <h2 className='section-title'>Posts List</h2>
                <p className='section-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, est! Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className='posts-wrapper'>
                {posts.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            postId={post.id}
                            postTitle={post.title}
                            postDesc={post.body}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default PostsList;
