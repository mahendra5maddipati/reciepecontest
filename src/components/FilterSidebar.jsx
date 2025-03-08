import React from "react";

const FilterSidebar = ({ setFilter, filter }) => {
  const handleFilterChange = (type, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [type]: value,
    }));
  };

  const clearFilter = () => {
    setFilter({});
  };

  const removeFilter = (type) => {
    setFilter((prevFilter) => {
      const newFilter = { ...prevFilter };
      delete newFilter[type];
      return newFilter;
    });
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "#f7fafc" }}>
      <h2 style={{ fontWeight: "bold" }}>Filter</h2>

      <h3 style={{ marginTop: "16px" }}>Attributes</h3>
      <button
        onClick={() => handleFilterChange("contestWinner", true)}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Contest Winner
      </button>
      <button
        onClick={() => handleFilterChange("featured", true)}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Featured
      </button>
      <button
        onClick={() => handleFilterChange("testKitchenApproved", true)}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Test Kitchen Approved
      </button>

      <h3 style={{ marginTop: "16px" }}>Meal Type</h3>
      <button
        onClick={() => handleFilterChange("mealType", "Dinner")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Dinner
      </button>
      <button
        onClick={() => handleFilterChange("mealType", "Lunch")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Lunch
      </button>
      <button
        onClick={() => handleFilterChange("mealType", "Dessert")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Dessert
      </button>
      <button
        onClick={() => handleFilterChange("mealType", "Breakfast")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Breakfast
      </button>

      <h3 style={{ marginTop: "16px" }}>Dish Type</h3>
      <button
        onClick={() => handleFilterChange("dishType", "Curry")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Curry
      </button>
      <button
        onClick={() => handleFilterChange("dishType", "Pizza")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Pizza
      </button>
      <button
        onClick={() => handleFilterChange("dishType", "Pasta")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Pasta
      </button>
      <button
        onClick={() => handleFilterChange("dishType", "Salad")}
        style={{
          display: "block",
          marginTop: "8px",
          padding: "8px",
          backgroundColor: "#4299e1",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Salad
      </button>

      <button
        onClick={clearFilter}
        style={{
          display: "block",
          marginTop: "16px",
          padding: "8px",
          backgroundColor: "#e53e3e",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Clear Filters
      </button>

      {Object.keys(filter).map((key) => (
        <button
          key={key}
          onClick={() => removeFilter(key)}
          style={{
            display: "block",
            marginTop: "8px",
            padding: "8px",
            backgroundColor: "#e53e3e",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Remove {key} Filter
        </button>
      ))}
    </div>
  );
};

export default FilterSidebar;