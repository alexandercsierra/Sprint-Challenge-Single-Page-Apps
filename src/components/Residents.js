import React, { useEffect, useState } from "react";
import Search from "./SearchForm"
import CharacterCard from "./CharacterCard"
import axios from "axios";
import styled from 'styled-components'


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid red;
`;


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const {locID} = props;
  const[search, setSearch] = useState("");
  const[resResults, setResResults] = useState([]);
  const[charList, setCharList] = useState([]);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${locID}`)
      .then(res => {
        let characters = res.data.residents;
        console.log(res.data.residents);
        return setResResults(res.data.residents);
        

      }
      
      )
      .catch(err => console.log(err))
  }, [locID]);

  useEffect(()=>{
    resResults.map((charURL)=>{
        axios.get(charURL)
            .then(res => {
                return setCharList([...charList, res.data])
            })
            .catch(err => console.log(err))
    })
  }, [resResults])


  return (
    <section className="character-list">
      <Search search={search} setSearch={setSearch}/>
      {console.log(charList)}

<CardContainer>{resResults}</CardContainer>

    </section>
  );


  
}




