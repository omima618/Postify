import './searchResults.css';
import PostCard from '../../components/postCard/PostCard';
import Spinner from '../../components/spinner/Spinner';
import NoResults from './noResults';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const SearchResults = () => {
    const keyword = useParams().keyword;
    const { posts } = useSelector((state) => state.posts);

    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(true);

    useEffect(() => {
        setSearchResults([]);
        const results = JSON.parse(JSON.stringify(posts)).filter((post) => {
            return post.title.includes(keyword);
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
                {searchResults.map((post) => {
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
    ) : (
        <NoResults />
    );
};

export default SearchResults;
