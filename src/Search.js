import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <div className="container-fluid">
    <form className="d-flex" action="#" onSubmit={(e) => e.preventDefault()}>
      <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={query}
              onChange={(e) => setQuery(e.target.value)}/>
    </form>
  </div>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;