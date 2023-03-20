import './searchResults.css';
import GoHomeButton from '../../components/buttons/GoHomeButton';

import noResultsImg from '../../assets/images/no-results.png';
import { useParams } from 'react-router';

const NoResults = () => {
    return (
        <section className='no-results-wrapper'>
            <div className='img-wrapper'>
                <img
                    src={noResultsImg}
                    alt='No Results Found'
                />
            </div>
            <p>
                There are no search results found for
                <span className='keyword'> "{useParams().keyword}" </span>
            </p>
            <GoHomeButton />
        </section>
    );
};

export default NoResults;
