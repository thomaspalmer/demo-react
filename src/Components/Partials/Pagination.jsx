import ReactPaginate from 'react-paginate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

const Pagination = ({ className, page, pageCount, handleGoToPage }) => {
    const liClasses = '-ml-px inline-flex bg-white';
    const disabledClasses = 'opacity-50';
    const aClasses = 'px-4 py-2 border border-gray-300 text-sm ' +
        'leading-5 font-medium focus:outline-none active:text-gray-700' +
        'transition ease-in-out duration-150 hover:opacity-75 ';
    const activeLinkClass = 'bg-indigo-500 text-white';

    /**
     * @function handlePageChange
     * @param selected
     */
    const handlePageChange = ({ selected }) => handleGoToPage(selected + 1);

    return (
        <div className={`${className}`}>
            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                forcePage={page - 1}
                onPageChange={handlePageChange}
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageClassName={liClasses}
                previousClassName={liClasses}
                breakClassName={liClasses}
                nextClassName={liClasses}
                disabledClassName={disabledClasses}
                pageLinkClassName={aClasses}
                breakLinkClassName={aClasses}
                previousLinkClassName={`${aClasses} rounded-l-md`}
                nextLinkClassName={`${aClasses} rounded-r-md`}
                activeLinkClassName={activeLinkClass}
            />
        </div>
    );
};

export default Pagination;