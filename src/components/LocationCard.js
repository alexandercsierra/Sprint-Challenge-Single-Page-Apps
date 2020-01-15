import React, {useEffect}from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const LocationCard = (props) => {
  const {loc, setLocID} = props;

  // useEffect(()=>{
    
  // }, [loc])
  
  return (
      <Card style={{width: "25%", margin: "4%"}}>
        <CardBody>
          <CardTitle>{loc.name}</CardTitle>
          <CardSubtitle>Type: {loc.type}</CardSubtitle>
        {/* </CardBody>
        <img width="100%" src="" alt="Card image cap" />
        <CardBody> */}
          <CardText>Dimension: {loc.dimension}</CardText>
          <CardLink href="#"onClick={()=>{
              setLocID(loc.id);
          }}><Link to={`/residents/${loc.name}`}>See Residents</Link></CardLink>
        </CardBody>
      </Card>
  );
};

export default LocationCard;