import React from "react";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">⌕</span>
      <input
        className="search-input"
        type="text"
        placeholder="Search by role..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;