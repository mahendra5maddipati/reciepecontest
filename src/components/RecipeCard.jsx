import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "16px",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
        src={recipe.imgUrl}
        alt={recipe.name}
        loading="lazy"
      />
      <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "8px" }}>{recipe.name}</h3>
      <p style={{ color: "#4a5568" }}>{recipe.chef}</p>
      <p style={{ color: "#d69e2e" }}>⭐ {recipe.avgRating} ({recipe.totalRatings} reviews)</p>
    </div>
  );
};

export default RecipeCard;
