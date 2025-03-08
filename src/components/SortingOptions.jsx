import React from "react";

const SortingOptions = ({ setSortOption }) => {
  return (
    <select
      style={{
        padding: "8px",
        border: "1px solid #e2e8f0",
        borderRadius: "4px",
      }}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="highest">Highest Rated</option>
      <option value="lowest">Lowest Rated</option>
    </select>
  );
};

export default SortingOptions;
