import React, { useState } from "react";

import recipes from "./recipes.js";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import SortingOptions from "../components/SortingOptions";
import FilterSidebar from "../components/FilterSidebar";

const RecipesPage = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [filter, setFilter] = useState({});

  let filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filter.mealType) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.mealType === filter.mealType);
  }

  if (filter.dishType) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.dishType === filter.dishType);
  }

  if (filter.contestWinner) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.contestWinner === filter.contestWinner);
  }

  if (filter.featured) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.featured === filter.featured);
  }

  if (filter.testKitchenApproved) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.testKitchenApproved === filter.testKitchenApproved);
  }

  if (sortOption === "newest") {
    filteredRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
  } else if (sortOption === "oldest") {
    filteredRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
  } else if (sortOption === "highest") {
    filteredRecipes.sort((a, b) => b.avgRating - a.avgRating);
  } else {
    filteredRecipes.sort((a, b) => a.avgRating - b.avgRating);
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ width: "25%" }}>
          <FilterSidebar setFilter={setFilter} filter={filter} />
        </div>
        <div style={{ width: "75%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <SearchBar setSearch={setSearch} />
            <SortingOptions setSortOption={setSortOption} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;