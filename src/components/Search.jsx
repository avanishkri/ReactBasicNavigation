import React, { useRef } from "react";

function Search({ searchTitle }) {
  const getRefTitle = useRef("");

  const handleClick = () => {
    searchTitle(getRefTitle.current.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Search
      </label>
      <div className="row">
        <div className="col-md-11">
          <input
            type="text"
            ref={getRefTitle}
            className="form-control form-control-dark text-bg-dark"
            id="title"
            placeholder="Search by Title"
          />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
