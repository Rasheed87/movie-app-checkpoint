
import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilterChange({ title: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
    onFilterChange({ title: titleFilter, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
