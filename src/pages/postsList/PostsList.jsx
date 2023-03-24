import './postsList.css';
import Spinner from '../../components/spinner/Spinner';

import PostCard from '../../components/postCard/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { postActions } from '../../app/features/postSlice';
import Pagination from '../../components/pagination/Pagination';

const PostsList = () => {
    const dispatch = useDispatch();

    const { posts, isLoading, paginate } = useSelector((state) => state.posts);

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 18;
    const indexOfLastPage = currentPage * cardsPerPage;
    const indexOfFirstPage = indexOfLastPage - cardsPerPage;
    const [currentPosts, setCurrentPosts] = useState([...posts].slice(indexOfFirstPage, indexOfLastPage));

    useEffect(() => {
        dispatch(postActions.resetPaginate());
    }, [dispatch]);

    useEffect(() => {
        setCurrentPosts([...posts].slice(indexOfFirstPage, indexOfLastPage));
        setCurrentPage(paginate);
    }, [indexOfFirstPage, indexOfLastPage, paginate, posts, setCurrentPosts]);

    return isLoading ? (
        <Spinner />
    ) : (
        <section className='posts-list'>
            <div className='section-title-wrapper'>
                <h2 className='section-title'>Posts List</h2>
                <p className='section-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, est! Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className='posts-wrapper'>
                {currentPosts.length > 0 &&
                    currentPosts.map((post) => {
                        return (
                            <PostCard
                                key={post.id}
                                postId={post.id}
                                postTitle={post.title}
                                postDesc={post.body}
                                userData={post.userData}
                            />
                        );
                    })}
            </div>
            {posts.length > 18 && (
                <Pagination
                    totalCards={posts.length}
                    cardsPerPage={cardsPerPage}
                />
            )}
        </section>
    );
};

export default PostsList;
