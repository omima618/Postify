import Logo from '../../../assets/images/logo.png';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        navigate(`/posts/${keyword}`);
        setKeyword('');
        window.scroll({top : 0})
    };

    return (
        <nav>
            <div className='container'>
                <Link to='/'>
                    <img
                        className='logo'
                        src={Logo}
                        alt='Website Logo'
                    />
                </Link>
                <span
                    className='search-separate-btn search-icon'
                    onClick={() => {
                        setShowSearchBar((prev) => {
                            return !prev;
                        });
                    }}
                >
                    <i className='fa-solid fa-magnifying-glass'></i>
                </span>
                <div className={`${showSearchBar && 'show-search-bar'} search-bar-wrapper`}>
                    <form
                        className='search-form'
                        onSubmit={submitSearch}
                    >
                        <input
                            type='search'
                            value={keyword}
                            placeholder='Search By Post Title...'
                            required
                            onChange={(e) => setKeyword(e.target.value.trim())}
                        />
                        <button
                            type='submit'
                            className='search-btn search-icon'
                        >
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
