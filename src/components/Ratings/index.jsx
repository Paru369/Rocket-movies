import { Container } from './styles'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';


export function Ratings(){

  return(

    <Container >
      
      <AiFillStar/>
    </Container>
  );

};

export function NegativeRatings(){

  return(

    <Container >
      <AiOutlineStar/>
    </Container>
  );

};