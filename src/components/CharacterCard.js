import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components'


const CharacterCard = (props) => {
  const {character} = props;
  return (
      <Card style={{width: "25%", margin: "4%"}}>
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>{character.species}</CardSubtitle>
        </CardBody>
        <img width="100%" src={character.image} alt="Card image cap" />
        <CardBody>
          <CardText>Origin: {character.origin.name}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
  );
};

export default CharacterCard;