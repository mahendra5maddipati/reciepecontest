import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #e2e8f0",
        borderRadius: "4px",
      }}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
