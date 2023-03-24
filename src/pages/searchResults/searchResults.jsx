import './searchResults.css';
import PostCard from '../../components/postCard/PostCard';
import Spinner from '../../components/spinner/Spinner';
import NoResults from './noResults';
import Pagination from '../../components/pagination/Pagination';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../app/features/postSlice';

const SearchResults = () => {
    const dispatch = useDispatch();
    const keyword = useParams().keyword;
    const { posts, paginate } = useSelector((state) => state.posts);

    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 18;
    const indexOfLastPage = currentPage * cardsPerPage;
    const indexOfFirstPage = indexOfLastPage - cardsPerPage;
    const [currentPosts, setCurrentPosts] = useState([...searchResults].slice(indexOfFirstPage, indexOfLastPage));

    useEffect(() => {
        dispatch(postActions.resetPaginate());
    }, [dispatch]);

    useEffect(() => {
        setCurrentPosts([...searchResults].slice(indexOfFirstPage, indexOfLastPage));
        setCurrentPage(paginate);
    }, [indexOfFirstPage, indexOfLastPage, paginate, searchResults, setCurrentPosts]);

    useEffect(() => {
        setSearchResults([]);
        const results = JSON.parse(JSON.stringify(posts)).filter((post) => {
            return post.title.includes(keyword.toLowerCase());
        });
        setSearchResults(results);
        setIsSearching(false);
    }, [keyword, posts]);

    return isSearching ? (
        <Spinner />
    ) : searchResults.length > 0 ? (
        <section className='search-results-list'>
            <h2 className='section-title'>
                Search Results : <span className='results-count'>({searchResults.length})</span> Results Found
            </h2>
            <div className='posts-wrapper'>
                {currentPosts.map((post) => {
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
            {searchResults.length > 18 && (
                <Pagination
                    totalCards={searchResults.length}
                    cardsPerPage={cardsPerPage}
                />
            )}
        </section>
    ) : (
        <NoResults />
    );
};

export default SearchResults;
