import React, { useState } from 'react';
import { navigate } from 'gatsby';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    navigate(`/search?keywords=${encodeURIComponent(query)}`);
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input"><h1>Search posts</h1></label>
      <input
        type="search"
        id="search-input"
        name="keywords"
        aria-controls="search-results-count"
        onChange={handleInputChange}
        value={query}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;

