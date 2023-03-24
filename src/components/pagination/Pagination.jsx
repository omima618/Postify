import './pagination.css';
import { postActions } from '../../app/features/postSlice';

import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({ cardsPerPage, totalCards }) => {
    const dispatch = useDispatch();

    const { paginate } = useSelector((state) => state.posts);

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNum.push(i);
    }

    const paginateHandler = (paginate) => {
        dispatch(postActions.setPaginate(paginate));
        setTimeout(() => {
            window.scroll({ top: 0, behavior: 'smooth' });
        }, 400);
    };

    return (
        <div className='pagination'>
            <button
                className='prev pagination-tab'
                disabled={paginate === 1}
                onClick={() => paginateHandler(paginate - 1)}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='6.778'
                    height='8.728'
                    viewBox='0 0 7.778 12.728'
                >
                    <path
                        id='Path_3569'
                        dataname='Path 3569'
                        d='M11.05,12,16,7.05,14.586,5.636,8.222,12l6.364,6.364L16,16.95Z'
                        transform='translate(-8.222 -5.636)'
                        fill='#0F172A'
                    />
                </svg>
            </button>
            {pageNum.map((page) => {
                return (
                    <span
                        key={`page-${page}`}
                        className={`${paginate === page ? 'pagination-tab active' : 'pagination-tab'}`}
                        onClick={() => paginateHandler(page)}
                    >
                        {page}
                    </span>
                );
            })}
            <button
                className='next pagination-tab'
                disabled={paginate === pageNum[pageNum.length - 1]}
                onClick={() => paginateHandler(paginate + 1)}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='6.778'
                    height='8.728'
                    viewBox='0 0 7.778 12.728'
                >
                    <path
                        id='Path_3569'
                        dataname='Path 3569'
                        d='M13.172,12,8.222,7.05,9.636,5.636,16,12,9.636,18.364,8.222,16.95Z'
                        transform='translate(-8.222 -5.636)'
                        fill='#0F172A'
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
