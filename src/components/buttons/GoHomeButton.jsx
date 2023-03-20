import './button.css';

import { Link } from 'react-router-dom';

const ColoredButton = () => {
    return (
        <Link
            to='/'
            className='go-home-btn'
            onClick={window.scroll({ top: 0 })}
        >
            Go Home
        </Link>
    );
};

export default ColoredButton;
