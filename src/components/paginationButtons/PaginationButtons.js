import React, {useContext} from 'react';
import './PaginationButtons.scss';
import SectionContext from '../../contexts/SectionContext';

const PaginationButtons = () => {
    const { pageNumber, setPageNumber } = useContext(SectionContext);

    const nextPage = () => setPageNumber(pageNumber + 1);

    const prevPage = () => setPageNumber(pageNumber - 1);

    return (
        <div className="content-section-buttons">
            <button 
                type="button" 
                className="prev-button" 
                disabled={`${pageNumber === 1 ? 'disabled' : ''}`} 
                onClick={prevPage}>
                Prev
            </button>
            <button 
                type="button"
                className="next-button" 
                disabled={`${pageNumber === 34 ? 'disabled' : ''}`}
                onClick={nextPage}>
                Next
            </button>
        </div>
    );
}

export default PaginationButtons;
