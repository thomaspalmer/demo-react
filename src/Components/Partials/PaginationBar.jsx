import React from 'react';

import Pagination from './Pagination';

const PaginationBar = ({ total, pageCount, page, className, handleGoToPage }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start mb-4 md:mb-0">
            <div className="text-sm leading-5 text-gray-700 mt-4 md:my-auto">
                {total} {`result${total > 1 ? 's' : ''}`} in {pageCount} page{pageCount > 1 ? 's' : ''}
            </div>

            <div>
                <Pagination
                    pageCount={pageCount}
                    page={page}
                    className={className}
                    handleGoToPage={handleGoToPage}
                />
            </div>
        </div>
    );
};

export default PaginationBar;