import React, { useEffect, useState } from "react";
import Search from "./SearchForm"
import LocationCard from "./LocationCard"
import axios from "axios";
import styled from 'styled-components'


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid red;
`;


export default function LocationsList(props) {
  const {setLocID} = props;
  // TODO: Add useState to track data from useEffect
  const[search, setSearch] = useState("");
  const[locResults, setLocResults] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        let locations = res.data.results.filter(loc =>{
          return loc.name.toLowerCase().includes(search.toLowerCase());
        })
        setLocResults(locations);
        // console.log(res);

      }
      
      )
      .catch(err => console.log(err))
  }, [locResults]);

//   useEffect(() => {

//         results.map(char => {
//             axios.get(char)
//                 .then()
//         })

//       }, [locResults]);


  return (
    <section className="character-list">
      <Search search={search} setSearch={setSearch}/>

      <CardContainer>{locResults.map(loc =>{

        return <LocationCard loc={loc} setLocID={setLocID}/>
      })}</CardContainer>

    </section>
  );


  
}




