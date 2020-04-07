import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchResult, setSearchResult] = useState();
  const onSearchChange = event => {
    setSearchResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const searchCharacter = props.character.filter(item => {
      return item.name.toLowerCase().indexOf(searchResult.toLowerCase()) !== -1;
    });
    props.search(searchCharacter);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search: </label>
        <input
          onChange={onSearchChange}
          type="text"
          name="character"
          placeholder="Search"
        />
      </form>
    </section>
  );
}
