import React from 'react';
import "./Pagination.css"
function Pagination(props) {
  let {pageNum, onPrevious, onNext} = props;

  return (
    <div className="
        flex
        justify-center
        my-4
        ">

        <div className="
        previous
        border-2
        p-2
        border-r-0
        rounded-l-xl
        border-blue-400
        cursor-pointer"
        onClick={onPrevious}
        >
          Previous
        </div>

        <div className="
        number
        border-2
        p-2
        border-r-0
        border-blue-400
        ">
          {pageNum}
        </div>

        <div className="
        next
        border-2
        p-2
        rounded-r-xl
        border-blue-400
        cursor-pointer"
        onClick={onNext}
        >
          Next
        </div>
    </div>
  );
};

export default Pagination;