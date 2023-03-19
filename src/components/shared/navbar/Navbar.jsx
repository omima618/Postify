import Logo from '../../../assets/images/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [keyword, setKeyword] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    // const searchHandler = (keyword) => {}
    
    return (
        <nav>
            <div className='container'>
                <Link to='/postify'>
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
                    <input
                        type='search'
                        value={keyword}
                        placeholder='Search By Post Title...'
                        onChange={(e) => setKeyword(e.value)}
                    />
                    <span className='search-btn search-icon'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
