import React, { useState } from "react";

export default function SearchForm(props) {
 const {search, setSearch} = props;
 

  function handleChange(e){
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <section className="search-form">
     <form>
       <input 
        type="text" 
        name="search" 
        placeholder="character name"
        onChange={handleChange}
        value={search}
        />
     </form>
     <button type="submit"></button>
    </section>
  );
}
