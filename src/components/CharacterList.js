import React, { useEffect, useState } from "react";
import Search from "./SearchForm"
import CharacterCard from "./CharacterCard"
import axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[search, setSearch] = useState("");
  const[results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        let characters = res.data.results.filter(char =>{
          return char.name.toLowerCase().includes(search.toLowerCase());
        })
        setResults(characters);

      }
      
      )
      .catch(err => console.log(err))
  }, []);

  return (
    <section className="character-list">
      <Search search={search} setSearch={setSearch}/>
  <div>{results.map(char =>{
    return (
    <div>{char.name}</div>
    )
  })}</div>
    </section>
  );
}




