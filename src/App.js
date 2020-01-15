import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'
import WelcomePage from './components/WelcomePage'
import Residents from './components/Residents'
import {Route} from 'react-router-dom'




export default function App() {

  const [locID, setLocID] = useState("");



  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage/>
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/locations">
        <LocationsList setLocID={setLocID}/>
      </Route>
      <Route path="/residents/:location">
        <Residents locID={locID}/>
      </Route>
      

    </main>
  );
}
